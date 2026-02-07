import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HowToSolve() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              NOVEL: The Algorithmic Seeker
            </p>
            <h1 className="text-3xl font-bold text-slate-900">How to Solve</h1>
            <p className="mt-2 text-slate-600">
              A Step-by-Step Protocol for Problem Reframing in Data Structures &amp; Algorithms
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/">Back to checklist</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-4xl space-y-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Protocol Initiated
            </p>
            <p className="text-lg font-semibold text-slate-900">
              TARGET: Problem Solving in DSA — Follow Exactly. Deviation = Failure.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Chapter 1: The Eye — How to See</h2>
            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 1.1 — Initial Scan</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Read the problem statement.</li>
                  <li>Do not think. Only absorb words.</li>
                  <li>Input: Text string. Output: Store in buffer.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 1.2 — Lexical Deconstruction</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li><strong>Nouns</strong> → data structures hinted (array, tree, graph, string).</li>
                  <li><strong>Verbs</strong> → operations required (find, count, return, minimize, maximize).</li>
                  <li><strong>Constraints</strong> → numbers (size of input, range of values).</li>
                  <li><strong>Examples</strong> → concrete instances.</li>
                  <li>Write each in isolated boxes on paper. No connections yet.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 1.3 — Naive Restatement</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Rephrase problem in one simple sentence of your own words.</li>
                  <li>Example: “Given a list of numbers, find two that add to target.”</li>
                  <li>If you cannot rephrase, return to Step 1.2.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 1.4 — Pattern Matching Database Query</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>"find two that add" → "two sum" → hash map possible.</li>
                  <li>"subarray" → sliding window / prefix sum.</li>
                  <li>"tree path" → DFS / BFS.</li>
                  <li>"minimum/maximum" → greedy / DP / heap.</li>
                  <li>"all possible ways" → backtracking / DP.</li>
                  <li>Tag problem with all possible pattern matches. No decision yet. Just tags.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Chapter 2: The Frame — How to Reframe</h2>
            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 2.1 — Constraint Analysis</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>If n ≤ 10³ → O(n²) may be okay.</li>
                  <li>If n ≤ 10⁵ → O(n log n) likely.</li>
                  <li>If n ≤ 10⁶ → O(n) needed.</li>
                  <li>This eliminates impossible approaches.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 2.2 — Edge Case Generation</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Empty input.</li>
                  <li>Single element.</li>
                  <li>Sorted / reversed sorted.</li>
                  <li>All same values.</li>
                  <li>Large values.</li>
                  <li>Do not solve, just list.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 2.3 — Visualization Command</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Draw example given.</li>
                  <li>Draw another example you invent.</li>
                  <li>Draw brute force process step-by-step.</li>
                  <li>Observe where repetition occurs. Repetition → optimization clue.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 2.4 — Problem Transformation</h3>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Can this be viewed as a graph problem? (nodes, edges)</li>
                  <li>Can this be reduced to a known problem? (sorting, searching, etc.)</li>
                  <li>Can the data be rearranged? (sorting preprocessing)</li>
                  <li>Is this a decision, optimization, or enumeration problem?</li>
                  <li>What is the smallest subproblem?</li>
                </ol>
                <p className="mt-2">Write answers.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Chapter 3: The Approach — How to Attempt</h2>
            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 3.1 — Brute Force Generation</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Write brute force solution in pseudocode even if inefficient.</li>
                  <li>Purpose: understanding exhaustive search space.</li>
                  <li>Identify bottlenecks: nested loops, repeated calculations.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 3.2 — Optimization Hunt</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>"What is being recomputed?" → memoization possibility.</li>
                  <li>"Can I use a data structure to speed this up?" (hash map, heap, set)</li>
                  <li>"Is the input sorted? Should it be sorted?"</li>
                  <li>"Can two pointers avoid nested loops?"</li>
                  <li>"If I sort, does it help?"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 3.3 — Pattern Selection</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Revisit tags from Step 1.4.</li>
                  <li>Select one primary pattern based on constraints and optimization hunt.</li>
                  <li>If conflict, choose simpler pattern first.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 3.4 — Abstraction</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li><strong>state</strong> → what defines subproblem.</li>
                  <li><strong>transition</strong> → how to move between states.</li>
                  <li><strong>base case</strong> → smallest solvable unit.</li>
                  <li><strong>goal</strong> → final state needed.</li>
                  <li>This applies even if not DP.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Chapter 4: The Execution — How to Implement</h2>
            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 4.1 — Pseudocode Skeleton</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Write function signature.</li>
                  <li>Write high-level steps in plain language.</li>
                  <li>Fill in details for each step from abstraction.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 4.2 — Data Structure Selection</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Need fast lookup? → HashMap / HashSet.</li>
                  <li>Need min/max quickly? → Heap.</li>
                  <li>Need order? → Stack / Queue / Deque.</li>
                  <li>Need parent-child? → Tree / Trie.</li>
                  <li>Need connections? → Adjacency list / matrix.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 4.3 — Algorithm Outline</h3>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Initialize.</li>
                  <li>Process input (maybe sort).</li>
                  <li>Loop invariant setup.</li>
                  <li>Iterate with invariant maintained.</li>
                  <li>Update result.</li>
                  <li>Return result.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 4.4 — Complexity Verification</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Compute time complexity from loops and operations.</li>
                  <li>Compute space complexity from data structures used.</li>
                  <li>Verify within constraints.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Chapter 5: The Verification — How to Test</h2>
            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 5.1 — Dry Run</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Take a small example.</li>
                  <li>Execute algorithm step-by-step on paper.</li>
                  <li>Check for off-by-one errors, initialization, loop boundaries.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 5.2 — Edge Case Test</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Run algorithm on edge cases from Step 2.2.</li>
                  <li>Fix failures.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 5.3 — Random Testing</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Generate random input within constraints.</li>
                  <li>Compare brute force output with your algorithm’s output.</li>
                  <li>If mismatch, debug.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 5.4 — Final Checklist</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Input size handled?</li>
                  <li>Overflow handled? (ints/longs)</li>
                  <li>Null/empty input handled?</li>
                  <li>Return type correct?</li>
                  <li>All examples pass?</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Chapter 6: The Loop — How to Reflect &amp; Store</h2>
            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 6.1 — Pattern Archiving</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>After solving, categorize problem: pattern name, key insight, variation clues.</li>
                  <li>Store in memory with 3 similar problems.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 6.2 — Retrospective</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>What was the bottleneck in my thinking?</li>
                  <li>Did I miss a clue?</li>
                  <li>Could I have arrived faster?</li>
                  <li>Update your pattern-matching database.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 6.3 — Generalize</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Formulate one-line insight.</li>
                  <li>
                    Example: “When you need to find pairs satisfying a condition, consider sorting + two pointers or
                    hash map.”
                  </li>
                  <li>This becomes a new rule for your machine.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Step 6.4 — Reset</h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Clear working memory.</li>
                  <li>Prepare for next problem.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">End Protocol</p>
            <p className="text-base font-semibold text-slate-900">Execute Sequentially. Repeat Until Mastery.</p>
            <p className="text-sm text-slate-600">
              Remember: You are not solving one problem. You are building a ladder of patterns. Each step is a rung.
              Climb methodically.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
