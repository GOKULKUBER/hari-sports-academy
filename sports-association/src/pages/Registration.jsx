import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle, ChevronRight, ChevronLeft, UploadCloud } from 'lucide-react';

const steps = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Sport Details' },
  { id: 3, title: 'Documents' }
];

export default function Registration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();

  const nextStep = async () => {
    let fieldsToValidate = [];
    if (currentStep === 1) fieldsToValidate = ['firstName', 'lastName', 'email', 'age', 'gender'];
    if (currentStep === 2) fieldsToValidate = ['sport', 'experience', 'phone', 'address'];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full text-center border border-gray-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-heading font-bold mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to the association! Your application has been received and is under review. We'll contact you shortly via email.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-full transition-colors w-full"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 sm:px-6">
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4">Athlete Registration</h1>
          <p className="text-gray-600 text-lg">Join us and start your journey to greatness.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100">
          
          {/* Progress Bar */}
          <div className="bg-gray-50 border-b border-gray-100 px-8 py-6">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full"></div>
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-secondary rounded-full transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              ></div>
              
              {steps.map(step => (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex justify-center items-center font-bold text-sm transition-colors duration-300 ${currentStep >= step.id ? 'bg-secondary text-white shadow-md' : 'bg-white border-2 border-gray-300 text-gray-400'}`}>
                    {step.id}
                  </div>
                  <span className={`absolute -bottom-6 text-xs font-semibold whitespace-nowrap ${currentStep >= step.id ? 'text-primary' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 font-heading">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                      <input {...register('firstName', { required: 'First name is required' })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="John" />
                      {errors.firstName && <span className="text-red-500 text-xs mt-1 block">{errors.firstName.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                      <input {...register('lastName', { required: 'Last name is required' })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="Doe" />
                      {errors.lastName && <span className="text-red-500 text-xs mt-1 block">{errors.lastName.message}</span>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="john@example.com" />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                      <input type="number" {...register('age', { required: 'Age is required', min: {value: 5, message: 'Must be at least 5'} })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="18" />
                      {errors.age && <span className="text-red-500 text-xs mt-1 block">{errors.age.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                      <select {...register('gender', { required: 'Gender is required' })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all bg-white">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.gender && <span className="text-red-500 text-xs mt-1 block">{errors.gender.message}</span>}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 font-heading">Sport Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Sport</label>
                      <select {...register('sport', { required: 'Sport is required' })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all bg-white">
                        <option value="">Select Sport</option>
                        <option value="athletics">Athletics</option>
                        <option value="football">Football</option>
                        <option value="basketball">Basketball</option>
                        <option value="swimming">Swimming</option>
                        <option value="volleyball">Volleyball</option>
                      </select>
                      {errors.sport && <span className="text-red-500 text-xs mt-1 block">{errors.sport.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level</label>
                      <select {...register('experience', { required: 'Experience level is required' })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all bg-white">
                        <option value="">Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="professional">Professional</option>
                      </select>
                      {errors.experience && <span className="text-red-500 text-xs mt-1 block">{errors.experience.message}</span>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" {...register('phone', { required: 'Phone is required' })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="+1 (555) 000-0000" />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Address</label>
                    <textarea {...register('address', { required: 'Address is required' })} rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none" placeholder="123 Main St, City, State, ZIP"></textarea>
                    {errors.address && <span className="text-red-500 text-xs mt-1 block">{errors.address.message}</span>}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 font-heading">Upload Documents</h3>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-secondary hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex justify-center items-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                      <UploadCloud className="w-8 h-8 text-gray-500 group-hover:text-secondary" />
                    </div>
                    <p className="font-semibold text-gray-700 mb-1">Click to upload Athlete Photo</p>
                    <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 5MB)</p>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-secondary hover:bg-gray-50 transition-colors cursor-pointer group">
                     <div className="w-16 h-16 bg-gray-100 rounded-full flex justify-center items-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                      <UploadCloud className="w-8 h-8 text-gray-500 group-hover:text-secondary" />
                    </div>
                    <p className="font-semibold text-gray-700 mb-1">Click to upload ID Proof</p>
                    <p className="text-sm text-gray-500">PDF, JPG or PNG (max. 10MB)</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl text-sm text-primary-light flex gap-3">
                    <span className="text-2xl -mt-1">ℹ️</span>
                    <p>All documents are securely stored and will only be used for verification purposes by the association governing body.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-10 flex justify-between items-center border-t border-gray-100 pt-8">
              <button 
                type="button" 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
              >
                <ChevronLeft className="w-5 h-5 mr-1" /> Back
              </button>
              
              {currentStep < 3 ? (
                <button 
                  type="button" 
                  onClick={nextStep}
                  className="flex items-center bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md group border border-transparent"
                >
                  Continue <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button 
                  type="submit"
                  className="flex items-center bg-secondary hover:bg-red-700 text-white px-10 py-3 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Submit Application
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
