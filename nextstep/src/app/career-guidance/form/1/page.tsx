// app/education/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export default function EducationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});
  const [currentStudying, setCurrentStudying] = useState(false);
  const [studyDate, setStudyDate] = useState<Date | undefined>(undefined);
  const [customEducation, setCustomEducation] = useState("");
  const [customStudyField, setCustomStudyField] = useState("");

  const handleRadioChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckboxChange = (id: string, option: string, checked: boolean) => {
    const prev = formData[id] || [];
    const updated = checked ? [...prev, option] : prev.filter((item: string) => item !== option);
    setFormData({ ...formData, [id]: updated });
  };

  

  const handleSubmit = () => {
    const dataToSubmit = {
      ...formData,
      edu_1: formData.edu_1 === "other" ? customEducation : formData.edu_1,
      edu_2_field: currentStudying ? (formData.edu_2_field === "custom" ? customStudyField : formData.edu_2_field) : null,
      edu_2_date: currentStudying && studyDate ? format(studyDate, "yyyy") : null,
    };
    router.push('career-guidance/form/2')
    console.log(dataToSubmit);
    // Handle submit logic here (API or navigation)
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Current Education Level</h1>
      <p className="text-muted-foreground mb-6">Assess the user's academic background to guide career/education recommendations</p>

      {/* edu_1 */}
      <div className="mb-6">
        <Label className="mb-2 block">What is the highest level of education you have completed?</Label>
        <RadioGroup value={formData.edu_1 || ""} onValueChange={(val) => handleRadioChange("edu_1", val)}>
          {[
            { value: "high_school_10", label: "High School (Class 10)" },
            { value: "high_school_12", label: "High School (Class 12)" },
            { value: "diploma", label: "Diploma/Certificate" },
            { value: "undergrad", label: "Undergraduate (Bachelor's)" },
            { value: "postgrad", label: "Postgraduate (Master's/PhD)" },
            { value: "none", label: "No formal education" },
            { value: "other", label: "Other" },
          ].map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2 my-1">
              <RadioGroupItem value={value} id={`edu_1_${value}`} />
              <Label htmlFor={`edu_1_${value}`}>{label}</Label>
            </div>
          ))}
        </RadioGroup>
        {formData.edu_1 === "other" && (
          <Input
            className="mt-2"
            placeholder="Please specify"
            value={customEducation}
            onChange={(e) => setCustomEducation(e.target.value)}
          />
        )}
      </div>

      {/* edu_2 */}
      <div className="mb-6">
        <Label className="mb-2 block">Are you currently studying?</Label>
        <RadioGroup
          value={formData.edu_2 || ""}
          onValueChange={(val) => {
            setCurrentStudying(val === "yes");
            handleRadioChange("edu_2", val);
          }}
        >
          <div className="flex items-center space-x-2 my-1">
            <RadioGroupItem value="yes" id="edu_2_yes" />
            <Label htmlFor="edu_2_yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2 my-1">
            <RadioGroupItem value="no" id="edu_2_no" />
            <Label htmlFor="edu_2_no">No</Label>
          </div>
        </RadioGroup>

        {currentStudying && (
          <>
            <div className="mt-4">
              <select
                className="w-full mt-1 border p-2 rounded-md"
                value={formData.edu_2_field || ""}
                onChange={(e) => handleRadioChange("edu_2_field", e.target.value)}
              >
                <option value="">Select a field</option>
                <option value="Science (Physics/Chemistry/Biology)">Science</option>
                <option value="Commerce (Business/Accounting)">Commerce</option>
                <option value="Arts/Humanities">Arts/Humanities</option>
                <option value="Engineering/Technology">Engineering</option>
                <option value="Medicine/Healthcare">Medicine</option>
                <option value="Other">Other</option>
                <option value="custom">Other (Specify)</option>
              </select>
              {formData.edu_2_field === "custom" && (
                <Input
                  className="mt-2"
                  placeholder="Specify your field"
                  value={customStudyField}
                  onChange={(e) => setCustomStudyField(e.target.value)}
                />
              )}
            </div>
            <div className="mt-4">
              <Label>Expected year of completion?</Label>
              <Calendar
                mode="single"
                selected={studyDate}
                onSelect={setStudyDate}
                className="rounded-md border mt-2"
              />
            </div>
          </>
        )}
      </div>

      {/* edu_3 */}
      <div className="mb-6">
        <Label className="mb-2 block">What was/were your main subject(s) or branch?</Label>
        {[
          "Mathematics",
          "Computer Science",
          "Biology",
          "Business/Finance",
          "Languages/Literature",
          "Design/Arts",
          "Engineering (Specify Branch)",
          "Other (Specify)",
        ].map((opt) => (
          <div key={opt} className="flex items-center space-x-2 my-1">
            <Checkbox
              id={`edu_3_${opt}`}
              onCheckedChange={(checked) =>
                handleCheckboxChange("edu_3", opt, Boolean(checked))
              }
            />
            <Label htmlFor={`edu_3_${opt}`}>{opt}</Label>
          </div>
        ))}
      </div>

      {/* edu_4 */}
      <div className="mb-6">
        <Label className="mb-2 block">How did you perform academically?</Label>
        <RadioGroup value={formData.edu_4 || ""} onValueChange={(val) => handleRadioChange("edu_4", val)}>
          {[1, 2, 3, 4, 5].map((val) => (
            <div key={val} className="flex items-center space-x-2 my-1">
              <RadioGroupItem value={val.toString()} id={`edu_4_${val}`} />
              <Label htmlFor={`edu_4_${val}`}>
                {val === 1
                  ? "Struggled"
                  : val === 3
                  ? "Average"
                  : val === 5
                  ? "Excellent"
                  : val}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* edu_5 */}
      <div className="mb-6">
        <Label className="mb-2 block">Do you plan to pursue further studies?</Label>
        <RadioGroup value={formData.edu_5 || ""} onValueChange={(val) => handleRadioChange("edu_5", val)}>
          {[
            { value: "yes_immediately", label: "Yes, right after current studies" },
            { value: "yes_later", label: "Yes, after work experience" },
            { value: "no", label: "No, I want to work now" },
            { value: "unsure", label: "Unsure" },
          ].map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2 my-1">
              <RadioGroupItem value={value} id={`edu_5_${value}`} />
              <Label htmlFor={`edu_5_${value}`}>{label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Button onClick={handleSubmit} className="mt-4">
        Submit
      </Button>
    </div>
  );
}
