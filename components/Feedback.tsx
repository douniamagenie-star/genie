
import React, { useState } from 'react';
import Card from './common/Card';
import { GoogleGenAI } from "@google/genai";

const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave }: { filled: boolean; onClick: () => void; onMouseEnter: () => void; onMouseLeave: () => void; }) => (
  <svg
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${filled ? 'text-genie-gold-500' : 'text-gray-300 hover:text-genie-gold-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.363 2.44a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.363-2.44a1 1 0 00-1.175 0l-3.363 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState('');
  const [error, setError] = useState('');

  const handleRatingClick = (index: number) => {
    setRating(index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || feedbackText.trim() === '') {
        setError('Please provide a rating and some feedback text.');
        return;
    }
    setError('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Analyze the sentiment of the following user feedback and generate a short, empathetic thank you message in 1-2 sentences. The user gave a rating of ${rating} out of 5 stars. Feedback: "${feedbackText}"`,
      });
      setApiResponse(response.text);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error calling Gemini API', err);
      // Fallback response in case of an API error
      setApiResponse('Thank you for your valuable feedback. We appreciate you taking the time to share your thoughts with us.');
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setRating(0);
    setFeedbackText('');
    setIsSubmitted(false);
    setApiResponse('');
    setError('');
  };

  if (isSubmitted) {
    return (
      <Card>
        <div className="text-center py-12 animate-fade-in">
            <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
          <h2 className="mt-6 text-2xl font-semibold text-gray-800">Feedback Submitted!</h2>
          <p className="mt-2 text-gray-600 max-w-md mx-auto">{apiResponse}</p>
          <button
            onClick={resetForm}
            className="mt-8 px-6 py-3 bg-genie-gold-500 text-white rounded-lg font-semibold hover:bg-genie-gold-600 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            Submit Another Feedback
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Submit Your Feedback">
      <p className="text-gray-600 mb-6">We'd love to hear what you think about Genie Pay. Your feedback helps us improve.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">How would you rate your experience?</label>
          <div className="flex items-center space-x-1" role="radiogroup">
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon
                key={index}
                filled={(hoverRating || rating) >= index}
                onClick={() => handleRatingClick(index)}
                onMouseEnter={() => setHoverRating(index)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="feedbackText" className="block text-sm font-medium text-gray-700">Share your feedback</label>
          <textarea
            id="feedbackText"
            name="feedbackText"
            rows={5}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genie-gold-500 focus:border-genie-gold-500 sm:text-sm transition-colors duration-200 ease-in-out hover:border-genie-gold-400"
            placeholder="Tell us what you liked or what could be improved..."
            required
            aria-required="true"
          />
        </div>
        {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-genie-gold-600 hover:bg-genie-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-genie-gold-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 disabled:bg-genie-gold-400 disabled:cursor-not-allowed"
          >
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                </>
            ) : (
              'Submit Feedback'
            )}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Feedback;
