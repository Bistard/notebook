



## Logical arguments, valid or invalid

* **Logic** is the analysis and appraisal of arguments. 

* An **argument** is a set of statements, namely one or several premises and a conclusion, usually connected by “therefore”. 

* An **argument** here is not a quarrel or fight. Rather it is the verbal expression of a reasoning process. 

* Consider this argument about the Cuyahoga River:

  No pure water is burnable. 

  Some Cuyahoga River water is burnable. 

  ———————————— (the horizontal line is short for therefore)

  Some Cuyahoga River water is not pure.

The above argument is **valid**.

> **<u>A valid (correct, sound) argument is one in which, whenever the premises are true, the conclusion is also true.</u>**

* Logic studies <u>forms</u> of reasoning. 

* The <u>content</u> might deal with anything - water purity, mathematics, cooking, nuclear physics, ethics, or whatever. 

* When we learn logic, we are learning tools of reasoning that can be applied to <u>any</u> subject. 

* Let us take another argument:

  No pure water is burnable. 

  Some Cuyahoga River water is not burnable. 

  ———————————— 

  Some Cuyahoga River water is pure water

* This argument is <u>invalid</u> (incorrect, unsound). (The whole Cuyahoga river could be polluted by non-burnables.)

## Logical arguments

**Example A**

* If the demand rises, then companies expand. 

* If companies expand, then companies hire workers. 

  ———————————————————— 

* If the demand rises, then companies hire workers.

The argument consists of two <u>premises</u> (1, 2) and the <u>conclusion</u> (3). If, whenever the <u>premises are accepted as true</u> it follows that <u>the conclusion is also true</u>, we say that the <u>conclusion logically follows from the premises</u>, or that the <u>argument is valid (correct, sound)</u>.

**IMPORTANT RULES**

> * **<u>The fact that an argument is valid does not mean that the conclusion is necessarily true</u>**. For example, in argument (A) one can argue against the conclusion, and claim that it is false.
> * The fact that an argument is valid only guarantees that **<u>if</u>** all premises are true **<u>then</u>** the conclusion is true.
> * <u>**Argument validity does not say anything about the conclusion**</u> in the cases when at least one of the premises is false.
> * In other words, **<u>the conclusion being false does not necessarily prove that an argument is invalid</u>**. An argument where one of the premises is false and the conclusion is also false could still be valid (the ”if” statement above is vacuously true.)

**Example B**

1. This computer program has a bug, or the input is erroneous. 

2. The input is not erroneous. 

   ——————————————————– 

3. This computer program has a bug.

* <u>Statements can be atomic</u> - cannot be further subdivided - (““This computer program has a bug.”), or compound (“The input is not erroneous.”).
* <u>Compound</u> statements consist of several parts, each of which is a statement in its own right.

## Hypothetical Syllogism

---

The letter $p$ may express the statement that “demand rises”, The letter $q$ may express the statement “companies expand”, The letter $r$ may express the statement “companies hire workers”.

Then the logical argument in Example (A) becomes:

1. If $p$ then $q$. 

2. If $q$ then $r$. 

   ——————

3. If $p$ then $r$. This type of argument is called a **<u>hypothetical syllogism</u>**.

## Disjunctive Syllogism

---

1. $p$ or $q$

2. NOT $q$

   ——————

3. $p$

Example: 

1. it is either day or night

2. not night

   ——————

3. it is day

The above type of argument is called **<u>disjunctive syllogism</u>**.

## Modus Ponens

---

1. if $p$ then $q$

2. $p$

   ——————

3. $q$

Example:

1. If it rains I will get wet.

2. it is raining

   ——————

3. I will get wet.

## Modus Tollens

---

1. if $p$ then $q$

2. NOT $q$

   ——————

3. NOT $p$

Example:

1. If I do all my chores I will get a puppy

2. I did not get a puppy

   ——————

3. I did not do all my chores

## Def - Propositions

---

> <u>Definition: Any statement that is either true or false is called a proposition.</u>

Meaningless statements, commands or questions are not propositions.

* p, q, r are called propositional variables. 
* True (denoted by 1) and false (denoted by 0) are propositional constants. 
* Any propositional variable can be assigned the value 1 or 0.

**Examples**

Which of the following sentences are propositions? What are the truth values of those that are propositions?

* Waterloo is the capital of Ontario. 
* Montreal is the capital of Canada. 
* 2 + 3 = 5. 4 5 + 7 = 10. 5 x + 2 = 11. 
* Answer this question. 
* x + y = y + x for every pair of real numbers x and y. 
* Do not pass go. 
* What time is it?

**Remarks**

> Propositional variables are <u>atomic propositions</u>, that is, they cannot be further subdivided
>
> <u>Compound propositions</u> are obtained by combining several atomic propositions
>
> The function of the words <u>or</u>, and, <u>not</u>, <u>if-then</u> is to combine propositions, and they are therefore called <u>logical connectives</u>.

## Logic Connective

Statements formulated in natural languages are frequently ambiguous because the words can have more than one meaning. We want to avoid this. Therefore we introduce new mathematical symbols to take the role of connectives.

Convention: Stating a proposition in English implies that this proposition is true. 

“it is true that cats eat fish” = “cats eat fish”. 

Similarly, if p is a proposition, then “p” means “p is true” or that “p holds”.

## Negation (NOT)

> <u>Definition:</u> Let p be a proposition. The compound proposition $¬p$, pronounced “not p”, is the proposition that is true when $p$ is false, and that is false when $p$ is true.

* $¬p$ is called the negation of $p$.
* <img src="D:\dev\AllNote\.mdnote\assets\image-20210913022840640.png" alt="image-20210913022840640" style="zoom:33%;" />

## Conjunction (AND)

> <u>Definition</u>. Let $p$ and $q$ be two propositions. The proposition $p ∧ q$ is true when both $p$ and $q$ are true, and false otherwise.

* $p ∧ q$ is called the conjunction of $p$ and $q$.
* the connective $∧$ is pronounced “and” and may be translated by the English word “and”.
* <img src="D:\dev\AllNote\.mdnote\assets\image-20210913022953973.png" alt="image-20210913022953973" style="zoom:33%;" />

When writing truth tables, we will use the convention that rows of 0s and 1s are written in decreasing lexicographic order whereby 1 > 0,
$$
11 > 10 > 01 > 00 \newline
111 > 110 > 101 > 100 > 011 > 010 > 001 > 000
$$

## Disjunction (inclusive or)

> <u>Definition</u>. Let $p$ and $q$ be two propositions. The proposition $p ∨ q$ is true when either $p$, or $q$, or both $p$ and $q$ are true, and is false when both $p$ and $q$ are false.

* $p ∨ q$ is called the disjunction of $p$ and $q$.
* the connective $∨$ is pronounced “or” and can usually be translated into English by the word “(inclusive) or”
* <img src="D:\dev\AllNote\.mdnote\assets\image-20210913023236346.png" alt="image-20210913023236346" style="zoom:33%;" />

The English word “or” has two different meanings. 

* Exclusive or: “You can either have soup or salad” means you can have soup or salad, but not both 
* Inclusive or: “The computer has a bug, or the input is erroneous” 
* ⭐To avoid ambiguity one should translate $p ∨ q$ into English as inclusive or, that is, “$p$ or $q$, or both” 
* ⭐Conversely, whenever translating from English into logic, “$p$ or $q$” should be translated as $p ∨ q$ (unless the text explicitly states “$p$ or $q$, but not both”)

## Implication (if-then)

> <u>Definition</u>. Let $p$ and $q$ be two propositions. Then $p → q$ is false when $p$ is true and $q$ is false, and true otherwise.

* $p → q$ is called the <u>implication</u> (or <u>conditional</u>) of $p$ and $q$.
* The implication of $p$ and $q$ may be translated into English by using the “If...then” construct, as in “If $p$, then $q$”, or to “ It is not the case that $p$ is true and $q$ is false.
* $p → q$ means that, whenever $p$ is correct, so is $q$.
* $p$ is called **<u>antecedent</u>**, $q$ is called **<u>consequent</u>**.
* <img src="D:\dev\AllNote\.mdnote\assets\image-20210913023812430.png" alt="image-20210913023812430" style="zoom:33%;" />



Generally, if $p$ is false, then “$p → q$” is vacuously true, since in such case the verification of “if $p$ then $q$” does not require doing anything to deduce $q$ from $p$. 

Although unusual, this yields no inconsistency with everyday speech. 

>  Example: “If the sun will rise from the West, I will eat my hat.”

My statement will never be contradicted (and in that sense it is true) because I know that “the sun will rise from the West” is false.

## Equivalent ways of expressing implication

The following are logically equivalent:

1. p → q. 
2. If p then q. 
3. Whenever p, then q. 
4. p is sufficient for q. 
5. p only if q. 
6. p implies q. 
7. q if p. 
8. q whenever p. 
9. q is necessary for p. 
10. q is implied by p.

## Equivalence (equivalent)

> <u>Definition</u>. Let $p$ and $q$ be two propositions. Then $p ↔ q$ is true whenever $p$ and $q$ have the same truth values.

* The proposition $p ↔ q$ is called <u>equivalence</u> (or <u>biconditional</u>).
* It is pronounced “$p$ if and only if $q$”.
* One often uses <u>iff</u> as an abbreviation for “if and only if”.
* <img src="D:\dev\AllNote\.mdnote\assets\image-20210913024309927.png" alt="image-20210913024309927" style="zoom:33%;" />

## Sorting out equivalence and implication

One should always be aware of the difference between equivalence and implication. In English, it is not always clear which connective is intended, as seen in the example below.

> Eating hamburgers at a fast-food bar is equivalent to aiding the destruction of the world’s rainforest.

This sentence looks like an equivalence, ↔, but if we swap the sentence around:

> Aiding the destruction of the rainforest is equivalent to eating hamburgers at a fast-food bar.

we can see that something is wrong. In fact, the intended meaning is implication →, not equivalence ↔:

> If one eats hamburgers at a fast-food bar then one is aiding the destruction of the world’s rainforest.

## Ambiguity and imprecision

Logic helps to clarify the meanings of descriptions written, for example, in English. After all, one reason for our use of logic is to state precisely the requirements of computer systems.

Descriptions in natural languages can be <u>ambiguous</u> or <u>imprecise</u>.

* An <u>ambiguous</u> sentence can have more than one distinct meaning.
* In contrast, an <u>imprecise</u> or <u>vague</u> sentence has only one meaning, but, as a proposition, the distinction between the circumstances under which is true and the circumstances under which it is false is not clear-cut.

**Examples**

> David and John from Toronto are coming for a visit.

Who is from Toronto? David or John or both? It is impossible to know without further information.

> I know a much funnier man than Bill.

This may have two meanings: "I know a much funnnier man than Bill does", or "I know a much funnier man than Bill is".

> Don’t leave animals in cars because they rapidly turn into ovens.

The immediate reading is far from the intended meaning.

> John is tall.

We do not know exactly what tall means. A more precise description is "John is over 2 meters tall".

> This computer is fast.

The meaning of “fast” is imprecise - fast compared to what? A more precise description would be "This computer executes 2 million instructions per second".

## Dealing with imprecision and ambiguity

* An <u>ambiguous</u> sentence usually has several interpretations. Ambiguity has to be eliminated by <u>querying the author of the sentence</u> or by <u>examining the context</u>.
* <u>Imprecision</u> or <u>vagueness</u> arises from the use of qualitative descriptions. Often we need to <u>introduce some quantitative measures</u> to remove vagueness.

## Marks

* $¬$ is the only <u>**unary connective**</u>, that is, $¬p$ negates a single proposition.
* All other connectives are **<u>binary connectives</u>** (they require two propositions which are joined by the connective).
* The binary connectives ∨, ∧, ↔ are **<u>symmetric</u>**, in the sense that the order of the two propositions joined by the connective does not affect the truth value of the resulting propositions.
* The connective $→$ is **<u>not</u> <u>symmetric</u>**: $p → q$ and $q → p$ have different truth values.

## Marked Quiz 1

Q1

Select each item that represents a proposition.

* [ ] Table woman cat computer chair.
* [x] Are there two universities in Waterloo?
* [ ] Tell me how many universities there are in Waterloo.
* [x] The sentence "What time is it?" is a proposition.
* [x] The moon is made of green cheese.
* [x] There are two universities in Waterloo.

Q2

Select each atomic proposition.

* [ ] I play the guitar and I play the piano.
* [x] I play the guitar.
* [ ] I play the guitar unless I play the piano.
* [x] I listen to Spotify.
* [ ] I don't play the guitar.
* [ ] I listen to Spotify if I can afford a subscription.

Q3

For this question, use the following notation.

| p    | I feed my dog.        |
| ---- | --------------------- |
| q    | I walk my dog.        |
| r    | I give my dog a bath. |
| s    | My dog is happy.      |

Match each English sentence with its correct translation into propositional logic.

*  I won't walk my dog unless she is happy $s \rightarrow q$
* My dog will be happy only if I feed her $p \rightarrow s$
*  I will walk my dog or give her a bath $q \or r$
* If I walk my dog and give her a bath, then she will be happy $(q ∧ r) → s$
*  If my dog is happy, then I will give her a bath $s → r$







