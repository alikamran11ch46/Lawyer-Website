"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

export default function BecomingLawyer() {
  const steps = [
    { title: "Matriculation", description: "Complete 10 years of schooling (SSC)." },
    { title: "Intermediate", description: "FA / F.Sc / ICS / I.Com (12 years total)." },
    { title: "LAT (Law Admission Test)", description: "Required for admission into LLB program." },
    { title: "LLB Program", description: "5 years (after Intermediate) or 3 years (after BA/BS in old system)." },
    { title: "LAW-GAT", description: "Law Graduate Assessment Test, pass with at least 50%." },
    { title: "Internship / Apprenticeship", description: "6 months under a senior advocate." },
    { title: "Bar Council Enrollment", description: "Apply to Sindh Bar Council (or other Provincial Bar Councils)." },
    { title: "Practice as Advocate", description: "Start practice in Lower Courts, later High Court & Supreme Court." },
  ];

  return (
    <div className="min-h-screen">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url(/lawyer-bg-1.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 flex flex-col items-center gap-6 p-6 max-w-3xl mx-auto py-12">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
            Path to Becoming a Lawyer in Pakistan (Sindh)
          </h1>
          <p className="text-xl text-gray-800 text-center mb-8 max-w-2xl font-medium drop-shadow-sm">
            Follow these steps to pursue a career in law and become a qualified advocate in Sindh, Pakistan
          </p>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center w-full"
          >
            <Card className="w-full shadow-lg rounded-2xl border-2 border-gray-200 hover:border-teal-300 transition-all hover:shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
                <p className="text-gray-600 text-base">{step.description}</p>
              </CardContent>
            </Card>
            {index < steps.length - 1 && <ArrowDown className="my-4 text-teal-500 w-8 h-8" />}
          </motion.div>
        ))}

        <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Need More Information?</h2>
          <p className="text-gray-600 text-center mb-6">
            Contact our office for detailed guidance on the enrollment process
          </p>
          <div className="flex justify-center">
            <a
              href="/contact-us"
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}