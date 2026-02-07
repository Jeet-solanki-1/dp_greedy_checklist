import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Plus, Trash2, Copy, Check } from "lucide-react";

interface ProblemState {
  id: string;
  name: string;
  problemType: string[];
  constraints: {
    n: string;
    rangeN: string;
    valuesRange: string;
    timePressure: boolean;
  };
  canSimulate: string;
  whySimulate: string;
  dpDefinition: string;
  decisions: {
    option1: string;
    option2: string;
    option3: string;
  };
  transition: string;
  baseCases: {
    dp0: string;
    dp1: string;
  };
  computationOrder: string;
  whyOrder: string;
  dpOptimization: string;
  optimizationDetails: string;
  greedyLocal: string;
  greedyFuture: string;
  finalAnswer: string;
  intuition: string;
}

const initialState: ProblemState = {
  id: Date.now().toString(),
  name: "Untitled Problem",
  problemType: [],
  constraints: {
    n: "",
    rangeN: "",
    valuesRange: "",
    timePressure: false,
  },
  canSimulate: "",
  whySimulate: "",
  dpDefinition: "",
  decisions: {
    option1: "",
    option2: "",
    option3: "",
  },
  transition: "",
  baseCases: {
    dp0: "",
    dp1: "",
  },
  computationOrder: "",
  whyOrder: "",
  dpOptimization: "",
  optimizationDetails: "",
  greedyLocal: "",
  greedyFuture: "",
  finalAnswer: "",
  intuition: "",
};

export default function Home() {
  const [problems, setProblems] = useState<ProblemState[]>([initialState]);
  const [activeTab, setActiveTab] = useState("0");
  const [copied, setCopied] = useState(false);

  const currentProblemIndex = parseInt(activeTab);
  const currentProblem = problems[currentProblemIndex];

  const updateProblem = (updates: Partial<ProblemState>) => {
    const newProblems = [...problems];
    newProblems[currentProblemIndex] = { ...currentProblem, ...updates };
    setProblems(newProblems);
  };

  const addNewProblem = () => {
    const newProblem = { ...initialState, id: Date.now().toString() };
    setProblems([...problems, newProblem]);
    setActiveTab(problems.length.toString());
  };

  const deleteProblem = (index: number) => {
    if (problems.length === 1) return;
    const newProblems = problems.filter((_, i) => i !== index);
    setProblems(newProblems);
    setActiveTab("0");
  };

  const toggleProblemType = (type: string) => {
    const types = currentProblem.problemType.includes(type)
      ? currentProblem.problemType.filter(t => t !== type)
      : [...currentProblem.problemType, type];
    updateProblem({ problemType: types });
  };

  const exportAsJSON = () => {
    const dataStr = JSON.stringify(problems, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dp-greedy-checklist.json";
    link.click();
  };

  const exportAsMarkdown = () => {
    let markdown = "# DP/Greedy Problem-Solving Checklist\n\n";
    
    problems.forEach((problem, idx) => {
      markdown += `## Problem ${idx + 1}: ${problem.name}\n\n`;
      markdown += `### 1️⃣ Problem Type\n${problem.problemType.join(", ") || "Not selected"}\n\n`;
      markdown += `### 2️⃣ Constraints\n- n = ${problem.constraints.n}\n- Range of n = ${problem.constraints.rangeN}\n- Values range = ${problem.constraints.valuesRange}\n- Time limit pressure = ${problem.constraints.timePressure ? "Yes" : "No"}\n\n`;
      markdown += `### 3️⃣ Can I simulate?\n${problem.canSimulate}\n\nWhy? ${problem.whySimulate}\n\n`;
      markdown += `### 4️⃣ dp[i] Definition\n${problem.dpDefinition}\n\n`;
      markdown += `### 5️⃣ Decisions\n- Option 1: ${problem.decisions.option1}\n- Option 2: ${problem.decisions.option2}\n- Option 3: ${problem.decisions.option3}\n\n`;
      markdown += `### 6️⃣ Transition\n${problem.transition}\n\n`;
      markdown += `### 7️⃣ Base Cases\n- dp[0] = ${problem.baseCases.dp0}\n- dp[1] = ${problem.baseCases.dp1}\n\n`;
      markdown += `### 8️⃣ Order of Computation\n${problem.computationOrder}\n\nWhy? ${problem.whyOrder}\n\n`;
      markdown += `### 9️⃣ DP Optimization\n${problem.dpOptimization}\n\nDetails: ${problem.optimizationDetails}\n\n`;
      markdown += `### 🔟 Greedy Possible?\nLocal choice = ${problem.greedyLocal}\n\nWhy future doesn't break = ${problem.greedyFuture}\n\n`;
      markdown += `### 1️⃣1️⃣ Final Answer\n${problem.finalAnswer}\n\n`;
      markdown += `### 1️⃣2️⃣ Intuition\n${problem.intuition}\n\n---\n\n`;
    });

    const dataBlob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dp-greedy-checklist.md";
    link.click();
  };

  const copyToClipboard = () => {
    const text = JSON.stringify(currentProblem, null, 2);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">🧠 DP/Greedy Solver</h1>
              <p className="mt-2 text-slate-600">Structured thinking template for algorithmic problems</p>
            </div>
            <div className="flex gap-2">
              <Button asChild size="sm" className="gap-2">
                <Link href="/how-to-solve">How to solve?</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={exportAsJSON}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                JSON
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={exportAsMarkdown}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Markdown
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab List */}
          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2">
            <TabsList className="inline-flex gap-2 bg-transparent p-0">
              {problems.map((problem, idx) => (
                <div key={problem.id} className="relative">
                  <TabsTrigger
                    value={idx.toString()}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 data-[state=active]:border-blue-500 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                  >
                    {problem.name || `Problem ${idx + 1}`}
                  </TabsTrigger>
                  {problems.length > 1 && (
                    <button
                      onClick={() => deleteProblem(idx)}
                      className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </TabsList>
            <Button
              onClick={addNewProblem}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              New Problem
            </Button>
          </div>

          {/* Tab Content */}
          {problems.map((problem, idx) => (
            <TabsContent key={problem.id} value={idx.toString()} className="space-y-6">
              {/* Problem Name */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">Problem Name</CardTitle>
                </CardHeader>
                <CardContent>
                  <input
                    type="text"
                    value={currentProblem.name}
                    onChange={(e) => updateProblem({ name: e.target.value })}
                    placeholder="e.g., Climbing Stairs, House Robber"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </CardContent>
              </Card>

              {/* Section 1: Problem Type */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">1️⃣</span>
                    Problem Type
                  </CardTitle>
                  <CardDescription>Circle one (or more if applicable)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["Count ways", "Min / Max", "Possible / Not possible", "Optimize (profit / cost / deletions)"].map((type) => (
                    <div key={type} className="flex items-center gap-3">
                      <Checkbox
                        id={type}
                        checked={currentProblem.problemType.includes(type)}
                        onCheckedChange={() => toggleProblemType(type)}
                      />
                      <label htmlFor={type} className="cursor-pointer text-sm font-medium text-slate-700">
                        {type}
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Section 2: Constraints */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">2️⃣</span>
                    Input & Constraints
                  </CardTitle>
                  <CardDescription>Only what matters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">n =</label>
                      <input
                        type="text"
                        value={currentProblem.constraints.n}
                        onChange={(e) => updateProblem({
                          constraints: { ...currentProblem.constraints, n: e.target.value }
                        })}
                        placeholder="e.g., length of array"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Range of n =</label>
                      <input
                        type="text"
                        value={currentProblem.constraints.rangeN}
                        onChange={(e) => updateProblem({
                          constraints: { ...currentProblem.constraints, rangeN: e.target.value }
                        })}
                        placeholder="e.g., 1 ≤ n ≤ 100"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Values range =</label>
                      <input
                        type="text"
                        value={currentProblem.constraints.valuesRange}
                        onChange={(e) => updateProblem({
                          constraints: { ...currentProblem.constraints, valuesRange: e.target.value }
                        })}
                        placeholder="e.g., 0-1000"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div className="flex items-center gap-3 pt-6">
                      <Checkbox
                        id="timePressure"
                        checked={currentProblem.constraints.timePressure}
                        onCheckedChange={(checked) => updateProblem({
                          constraints: { ...currentProblem.constraints, timePressure: checked as boolean }
                        })}
                      />
                      <label htmlFor="timePressure" className="cursor-pointer text-sm font-medium text-slate-700">
                        Time limit pressure?
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Can I simulate? */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">3️⃣</span>
                    Can I Simulate?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {["Yes (n is small)", "No (n is big → DP / Greedy)"].map((option) => (
                      <div key={option} className="flex items-center gap-3">
                        <Checkbox
                          id={`simulate-${option}`}
                          checked={currentProblem.canSimulate === option}
                          onCheckedChange={() => updateProblem({ canSimulate: option })}
                        />
                        <label htmlFor={`simulate-${option}`} className="cursor-pointer text-sm font-medium text-slate-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Why?</label>
                    <Textarea
                      value={currentProblem.whySimulate}
                      onChange={(e) => updateProblem({ whySimulate: e.target.value })}
                      placeholder="Explain your reasoning..."
                      className="min-h-20"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: DP Definition */}
              <Card className="border-slate-200 bg-gradient-to-br from-amber-50 to-amber-50/50 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-amber-200 px-3 py-1 text-sm font-bold text-amber-900">4️⃣</span>
                    What does dp[i] represent?
                  </CardTitle>
                  <CardDescription className="text-amber-700">THIS IS THE MOST IMPORTANT</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={currentProblem.dpDefinition}
                    onChange={(e) => updateProblem({ dpDefinition: e.target.value })}
                    placeholder="Write in plain English, not math. Example: 'Maximum profit we can get up to house i'"
                    className="min-h-24"
                  />
                </CardContent>
              </Card>

              {/* Section 5: Decisions */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">5️⃣</span>
                    What decisions do I have at index i?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { key: "option1", label: "Option 1" },
                    { key: "option2", label: "Option 2" },
                    { key: "option3", label: "Option 3 (if any)" },
                  ].map(({ key, label }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{label}:</label>
                      <input
                        type="text"
                        value={currentProblem.decisions[key as keyof typeof currentProblem.decisions]}
                        onChange={(e) => updateProblem({
                          decisions: { ...currentProblem.decisions, [key]: e.target.value }
                        })}
                        placeholder={`e.g., "Include current element"`}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Section 6: Transition */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">6️⃣</span>
                    Transition
                  </CardTitle>
                  <CardDescription>How dp[i] is built (use dp[i-1], dp[i-2], etc. No code yet)</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={currentProblem.transition}
                    onChange={(e) => updateProblem({ transition: e.target.value })}
                    placeholder="e.g., dp[i] = max(dp[i-1], dp[i-2] + arr[i])"
                    className="min-h-20"
                  />
                </CardContent>
              </Card>

              {/* Section 7: Base Cases */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">7️⃣</span>
                    Base Cases
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">dp[0] =</label>
                      <input
                        type="text"
                        value={currentProblem.baseCases.dp0}
                        onChange={(e) => updateProblem({
                          baseCases: { ...currentProblem.baseCases, dp0: e.target.value }
                        })}
                        placeholder="e.g., 0 or 1"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">dp[1] =</label>
                      <input
                        type="text"
                        value={currentProblem.baseCases.dp1}
                        onChange={(e) => updateProblem({
                          baseCases: { ...currentProblem.baseCases, dp1: e.target.value }
                        })}
                        placeholder="e.g., 1 or arr[0]"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 8: Order of Computation */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">8️⃣</span>
                    Order of Computation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {["Left → Right", "Right → Left", "Nested loops"].map((order) => (
                      <div key={order} className="flex items-center gap-3">
                        <Checkbox
                          id={`order-${order}`}
                          checked={currentProblem.computationOrder === order}
                          onCheckedChange={() => updateProblem({ computationOrder: order })}
                        />
                        <label htmlFor={`order-${order}`} className="cursor-pointer text-sm font-medium text-slate-700">
                          {order}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Why this order?</label>
                    <Textarea
                      value={currentProblem.whyOrder}
                      onChange={(e) => updateProblem({ whyOrder: e.target.value })}
                      placeholder="Explain the reasoning..."
                      className="min-h-20"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 9: DP Optimization */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">9️⃣</span>
                    Can this DP be optimized?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {["Yes → to O(1) space", "No"].map((option) => (
                      <div key={option} className="flex items-center gap-3">
                        <Checkbox
                          id={`opt-${option}`}
                          checked={currentProblem.dpOptimization === option}
                          onCheckedChange={() => updateProblem({ dpOptimization: option })}
                        />
                        <label htmlFor={`opt-${option}`} className="cursor-pointer text-sm font-medium text-slate-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">What past states are truly needed?</label>
                    <Textarea
                      value={currentProblem.optimizationDetails}
                      onChange={(e) => updateProblem({ optimizationDetails: e.target.value })}
                      placeholder="e.g., Only need dp[i-1] and dp[i-2]"
                      className="min-h-20"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 10: Greedy */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">🔟</span>
                    Is greedy possible?
                  </CardTitle>
                  <CardDescription>If greedy works, DP table not needed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Local choice =</label>
                    <input
                      type="text"
                      value={currentProblem.greedyLocal}
                      onChange={(e) => updateProblem({ greedyLocal: e.target.value })}
                      placeholder="e.g., Always pick the largest coin"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Why future does not break this choice?</label>
                    <Textarea
                      value={currentProblem.greedyFuture}
                      onChange={(e) => updateProblem({ greedyFuture: e.target.value })}
                      placeholder="Explain why the greedy choice is globally optimal..."
                      className="min-h-20"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 11: Final Answer */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">1️⃣1️⃣</span>
                    Final Answer Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700">Answer = dp[</span>
                    <input
                      type="text"
                      value={currentProblem.finalAnswer}
                      onChange={(e) => updateProblem({ finalAnswer: e.target.value })}
                      placeholder="e.g., n-1"
                      className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    <span className="text-sm font-medium text-slate-700">]</span>
                  </div>
                </CardContent>
              </Card>

              {/* Section 12: Intuition */}
              <Card className="border-slate-200 bg-gradient-to-br from-green-50 to-green-50/50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="rounded-full bg-green-200 px-3 py-1 text-sm font-bold text-green-900">1️⃣2️⃣</span>
                    One-line Intuition
                  </CardTitle>
                  <CardDescription className="text-green-700">VERY IMPORTANT</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={currentProblem.intuition}
                    onChange={(e) => updateProblem({ intuition: e.target.value })}
                    placeholder="Example: 'choosing or skipping', 'counting paths', 'balancing conflicts'"
                    className="min-h-20"
                  />
                </CardContent>
              </Card>

              {/* Copy Button */}
              <div className="flex justify-end">
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Problem as JSON
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-600">
            Fill this template for each problem • THEN write code • If stuck → fix template, not code
          </p>
          <p className="mt-2 text-xs text-slate-500">
            🕯️ For tonight's 6-hour session: Climbing Stairs • House Robber • Decode Ways • Coin Change II
          </p>
        </div>
      </footer>
    </div>
  );
}
