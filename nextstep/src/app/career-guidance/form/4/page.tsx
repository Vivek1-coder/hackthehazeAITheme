import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function PersonalityWorkStyleForm() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="space-y-4 p-4">
          <p className="font-semibold">Given two projects, you'd prefer:</p>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="team" id="team" />
              <Label htmlFor="team">Leading a team brainstorm session</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="solo" id="solo" />
              <Label htmlFor="solo">Working independently on a technical problem</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-4">
          <p className="font-semibold">Your manager suddenly changes project requirements. You:</p>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="adjust_plan" id="adjust_plan" />
              <Label htmlFor="adjust_plan">Create a new plan and adjust priorities quickly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="request_guidelines" id="request_guidelines" />
              <Label htmlFor="request_guidelines">Request clear revised guidelines before proceeding</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="analyze_impact" id="analyze_impact" />
              <Label htmlFor="analyze_impact">Analyze impact on original goals before deciding</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-4">
          <p className="font-semibold">How often do you:</p>
          <div className="space-y-2">
            <Label>Take charge in unstructured group situations</Label>
            <select className="w-full border p-2 rounded">
              <option>Never</option>
              <option>Rarely</option>
              <option>Sometimes</option>
              <option>Often</option>
              <option>Always</option>
            </select>
            <Label>Need quiet time to recharge after social interactions</Label>
            <select className="w-full border p-2 rounded">
              <option>Never</option>
              <option>Rarely</option>
              <option>Sometimes</option>
              <option>Often</option>
              <option>Always</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-4">
          <p className="font-semibold">Select your ideal workspace:</p>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="open" id="open" />
              <Label htmlFor="open">Open collaborative space</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="private" id="private" />
              <Label htmlFor="private">Private quiet office</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hybrid" id="hybrid" />
              <Label htmlFor="hybrid">Mix of both with flexibility</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-4">
          <p className="font-semibold">Your approach to deadlines:</p>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="early" id="early" />
              <Label htmlFor="early">Early intensive → Relaxed finish</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="steady" id="steady" />
              <Label htmlFor="steady">Gradual consistent pace</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sprint" id="sprint" />
              <Label htmlFor="sprint">Last-minute high-pressure sprint</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}
