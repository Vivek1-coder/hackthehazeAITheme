'use client'
import { AptitudeSkillsForm } from "@/components/forms/AptitudeSkillsForm";
import React from "react";

export default function Page() {

  const sectionData = {
    section_name: "Aptitude & Skills Assessment",
    section_description: "Determine strengths through behavioral and situational questions",
    scoring_model: {
      skills_tested: ["logical", "verbal", "spatial", "technical", "creative", "interpersonal"],
      score_range: [0, 10]
    },
    questions: [
      {
        id: "apt_1",
        type: "scenario",
        question: "When presented with a complex problem, your first instinct is to:",
        options: [
          {
            text: "Break it into smaller parts and analyze systematically",
            scores: { logical: 2, technical: 1 }
          },
          {
            text: "Draw diagrams or visualize possible solutions",
            scores: { spatial: 2, creative: 1 }
          },
          {
            text: "Discuss with others to gather perspectives",
            scores: { interpersonal: 2, verbal: 1 }
          },
          {
            text: "Try hands-on experimentation immediately",
            scores: { technical: 2, spatial: 1 }
          }
        ],
        max_select: 1
      },
      {
        id: "apt_2",
        type: "skill_test",
        question: "Solve this logical sequence: 2, 4, 8, 16, ___",
        options: [
          { text: "24", scores: { logical: 1 } },
          { text: "32", scores: { logical: 3 } },
          { text: "18", scores: { logical: 0 } },
          { text: "Not sure", scores: {} }
        ],
        time_limit: 30,
        feedback: "This tests pattern recognition (key for programming/data roles)"
      },
      {
        id: "apt_3",
        type: "behavioral",
        question: "How often do people come to you for help with:",
        sub_questions: [
          {
            text: "Fixing technical devices?",
            options: [
              { text: "Never", scores: { technical: 0 } },
              { text: "Sometimes", scores: { technical: 1 } },
              { text: "Regularly", scores: { technical: 3 } }
            ]
          },
          {
            text: "Resolving conflicts?",
            options: [
              { text: "Never", scores: { interpersonal: 0 } },
              { text: "Sometimes", scores: { interpersonal: 2 } },
              { text: "Often", scores: { interpersonal: 4 } }
            ]
          }
        ]
      },
      {
        id: "apt_4",
        type: "visual",
        question: "Which 3D shape matches this 2D net? (Show image options)",
        options: [
          { image: "cube_net.png", correct: true, scores: { spatial: 3 } },
          { image: "pyramid_net.png", scores: { spatial: 1 } },
          { image: "cylinder_net.png", scores: { spatial: 1 } }
        ],
        hint: "Tests spatial visualization (important for engineering/design)"
      },
      {
        id: "apt_5",
        type: "verbal",
        question: "Read this passage and identify the main argument:",
        content: "While technology increases productivity, studies show...",
        options: [
          { text: "Summarizes key points accurately", scores: { verbal: 3 } },
          { text: "Captures only secondary details", scores: { verbal: 1 } },
          { text: "Misinterprets the core idea", scores: { verbal: 0 } }
        ]
      }
    ],
    result_calculation: {
      method: "cumulative_scores",
      thresholds: {
        high: 8,
        medium: 5,
        low: 3
      }
    }
  };

  return <AptitudeSkillsForm {...sectionData} />;
}