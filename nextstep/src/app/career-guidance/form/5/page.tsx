import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const InnovativeThinkingForm = () => {
  return (
    <div className="p-4 space-y-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">Innovative Thinking & Problem-Solving</h2>
      <p className="text-muted-foreground">
        Evaluate creative problem-solving approaches and innovation potential
      </p>

      {/* 1. Open-Ended Creativity Test */}
      <div className="space-y-2">
        <Label className="text-lg font-semibold">
          List unusual uses for a paperclip (2 min):
        </Label>
        <Textarea placeholder="Enter your ideas separated by commas or lines..." />
        <p className="text-sm text-muted-foreground">
          Hint: Measures divergent thinking (Torrance Test adapted)
        </p>
      </div>

      {/* 2. Problem-Solving Scenario */}
      <div className="space-y-2">
        <Label className="text-lg font-semibold">
          Design a transportation solution for hilly rural areas:
        </Label>
        <ul className="text-sm text-muted-foreground list-disc list-inside">
          <li>Budget &lt; ₹50k</li>
          <li>No electricity</li>
          <li>Elderly-friendly</li>
        </ul>
        <Textarea placeholder="Describe your solution here..." />
      </div>

      {/* 3. Cognitive Flexibility Measure */}
      <div className="space-y-2">
        <Label className="text-lg font-semibold">
          How would you improve both quality AND speed in a manufacturing process?
        </Label>
        <Textarea placeholder="Your response..." />
      </div>

      {/* 4. Risk Assessment */}
      <div className="space-y-2">
        <Label className="text-lg font-semibold">
          Your team proposes a radical but untested approach with 30% success probability:
        </Label>
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="invest" id="invest" />
            <Label htmlFor="invest">Invest fully in the new idea</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="experiment" id="experiment" />
            <Label htmlFor="experiment">Run small parallel experiment</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="reject" id="reject" />
            <Label htmlFor="reject">Reject as too risky</Label>
          </div>
        </RadioGroup>
      </div>

      {/* 5. Pattern Recognition */}
      <div className="space-y-2">
        <Label className="text-lg font-semibold">
          Which shape completes the pattern?
        </Label>
        <div className="grid grid-cols-3 gap-4">
          <label className="block">
            <input type="radio" name="pattern" value="a" />
            <img src="/images/option_a.png" alt="Option A" className="mt-1 rounded" />
          </label>
          <label className="block">
            <input type="radio" name="pattern" value="b" />
            <img src="/images/option_b.png" alt="Option B" className="mt-1 rounded" />
          </label>
          <label className="block">
            <input type="radio" name="pattern" value="c" />
            <img src="/images/option_c.png" alt="Option C" className="mt-1 rounded" />
          </label>
        </div>
      </div>

      <Button className="mt-6">Submit Assessment</Button>
    </div>
  );
};

export default InnovativeThinkingForm;
