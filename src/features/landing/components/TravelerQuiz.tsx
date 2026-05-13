import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { quizQuestions, travelerTypes } from '@/data/QuizData';
import { ArrowRight, RotateCcw } from 'lucide-react';

export default function TravelerQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const counts: Record<string, number> = {};
    finalAnswers.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
    const topType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setResult(topType);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Discovery Tools</h2>
          <h3 className="text-3xl md:text-5xl font-bold italic">What Type of Traveler are You?</h3>
        </div>

        <div className="bg-zinc-800/50 p-8 md:p-16 rounded-[3rem] border border-zinc-700 min-h-[400px] flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="mb-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 text-zinc-500">
                    <span>Question {currentStep + 1} of 5</span>
                    <span>{Math.round(((currentStep + 1) / 5) * 100)}%</span>
                  </div>
                  <Progress value={((currentStep + 1) / 5) * 100} className="h-1 bg-zinc-700" />
                </div>

                <h4 className="text-xl md:text-2xl font-bold mb-8">{quizQuestions[currentStep].question}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Tipe data opt dan i sudah dideklarasikan secara eksplisit di sini */}
                  {quizQuestions[currentStep].options.map((opt: { text: string; type: string }, i: number) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.type)}
                      className="p-6 text-left border border-zinc-700 rounded-2xl hover:bg-primary hover:text-black hover:border-primary transition-all font-medium"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <span className="text-primary font-bold tracking-widest uppercase text-xs">Your Result</span>
                <h4 className="text-4xl md:text-6xl font-bold mt-4 mb-6 italic">{travelerTypes[result as keyof typeof travelerTypes].title}</h4>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  {travelerTypes[result as keyof typeof travelerTypes].description}
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button className="bg-primary text-black rounded-full px-10 h-14 font-bold uppercase tracking-widest text-xs">
                    Explore {travelerTypes[result as keyof typeof travelerTypes].recommendation}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <Button variant="ghost" onClick={resetQuiz} className="text-zinc-500 hover:text-white flex items-center gap-2">
                    <RotateCcw size={16} /> Re-take Quiz
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}