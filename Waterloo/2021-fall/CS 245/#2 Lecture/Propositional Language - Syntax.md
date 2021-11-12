## Propositional Language

* By using connectives, we can combine propositions, whether they are atomic themselves or compound.
* To prevent ambiguity, we will introduce <u>fully parenthesized expressions</u> that can be parsed in a unique way. (Later, we will use precedence rules to omit some parentheses.)
* In the following, we construct the <u>propositional language</u> $\mathcal{L}^p$, which is the formal language of propositional logic.
* The set of **formulas** in $\mathcal{L}^p$, denoted by **Form($\mathcal{L}^p$)**, will then be defined by a set of formation rules which produce expressions (string of symbols) in $\mathcal{L}^p$ belonging to **Form($\mathcal{L}^p$)**.

## Syntax of the Propositional Language $\mathcal{L}^p$

$\mathcal{L}^p$ is the formal language of propositional logic. Strings in $\mathcal{L}^p$ comprise three classes of symbols:

* <u>proposition symbols</u>: $p,q,r,...,$ with or withou subscripts (note that there is an unbounded number of such symbols)
* <u>connective symbols</u>: $\neg, \and, \or, \rightarrow,\leftrightarrow$. These are pronunced as negation, conjunction, disjunction, implication and equivalence.
* <u>punctuation symbols</u>: left and right parentheses: (, ).

## Expressions of $\mathcal{L}^p$

* <u>Expressions</u> are finite strings of the allowed symbols - $p, pq, (r), p\and\rightarrow q$ and $\neg(p\or q)$ are expressions in $\mathcal{L}^p$.
* <u>Length</u> of expression: the number of occurrences of symbols in it - for the expressions above, length are 1,2,3,4 and 6.
* <u>Empty expression</u>: expression of length 0, denoted by $\epsilon$ (not to be confused with the empty set $\emptyset$).
  * the textbook denotes the empty expression by $\emptyset$, but we will write $\epsilon$ instead.
* Two expressions $U, V$ are <u>equal</u> iff they are of the same length and have the same symbols in the same order.
* Scanning of expressions proceeds from left to right.

## Expressions

* <u>Concatenating</u> two expressions $U, V$, in this order, is denoted by $UV$. Note that $\epsilon U = U \epsilon = U$ for any expression $U$.
* If $U = W_1VW_2$ where $U,V,W_1,W_2$ are expressions, then:
  * $V$ is a <u>segment</u> of $U$,
  * If $V \neq U$, then $V$ is a proper segment of $U$.
* <u>Every expression is a segment of itself</u>.
* The empty expression $\epsilon$ is a segment of every expression.
* If $U =VW$, where $U,V,W$ are expressiosn, then $V$ is an u and $W$ is a <u>terminal segment (suffix)</u> of $U$.
  * If $W \neq \epsilon$, then $V$ is a <u>proper initial segment (proper prefix)</u> of $U$.
  * If $V \neq \epsilon$, then $V$ is a <u>proper terminal segment (proper suffix)</u> of $U$.

## The set of formulas of $\mathcal{L}^p$

> <u>Definition</u>. *Atom*($\mathcal{L}^p$) - the <u>atoms</u>, or <u>atomic formulas</u> of $\mathcal{L}^p$ - is the set of expressions of $\mathcal{L}^p$ that consist of a proposition symbol only.
>
> <u>Definition</u>. The set *Form*($\mathcal{L}^p$), of <u>formulas</u> of $\mathcal{L}^p$, is defined recursively as:
>
> ​	I. BASE: Every atom in Atom($\mathcal{L}^p$) is a formula in Form($\mathcal{L}^p$);
>
> ​	II. RECURSION: If $A$ and $B$ are formulas in Form($\mathcal{L}^p$), then:
>
> 1. ($\neg A$) is a formula in Form($\mathcal{L}^p$)
> 2. ($A \and B$) is a formula in Form($\mathcal{L}^p$)
> 3. ($A \or B$) is a formula in Form($\mathcal{L}^p$)
> 4. ($A \rightarrow B$) is a formula in Form($\mathcal{L}^p$)
> 5. ($A\leftrightarrow B$) is a formula in Form($\mathcal{L}^p$)
>
> III. RESTRICTION: No other expressions in $\mathcal{L}^p$ are formulas in Form($\mathcal{L}^p$).

* Items [1] - [5] in the RECURSION part of the definition of Form($\mathcal{L}^p$) are called the <u>formuation rules</u> of formulas in $\mathcal{L}^p$.
* $p,q,r$ are atomic formulas in Atom($\mathcal{L}^p$), and thus formulas in Form($\mathcal{L}^p$).
* $((p\and p) \rightarrow r)$ and $((\neg q) \leftrightarrow (p \or s))$ are formulas in Form($\mathcal{L}^p$). But not atomic formulas in Atom($\mathcal{L}^p$).
* $(p \and \and \and (((r \rightarrow $ is an expression in $\mathcal{L}^p$, but it is neither an atomic formula in Atom($\mathcal{L}^p$), nor a formula in Form($\mathcal{L}^p$).

### Example (generating formulas)

The expression
$$
((p \and q) \rightarrow ((\neg p) \leftrightarrow (q \and r)))
$$
is a formula. How is it generated using the <u>formation rules</u>?

* $p,q,r$ are in Form($\mathcal{L}^p$) by Definition of Form($\mathcal{L}^p$), BASE
* $(\neg p)$ is in Form($\mathcal{L}^p$), by RECURSION rule [1]
* $(q \and r)$ and $(p \or q)$ are in Form($\mathcal{L}^p$) due to RECURSION rules [2] and [3]
* $((\neg p) \leftrightarrow (q \and r))$ is in Form($\mathcal{L}^p$), due to RECURSION rule [5]
* $((p \or q) \rightarrow ((\neg p) \leftrightarrow (q \and r)))$ is in Form($\mathcal{L}^p$), by RECURSION rule [4] aplied to $(p \or q)$ and $((\neg p) \leftrightarrow (q \and r))$.

### Example (parsing formulas)

> If Michelle wins at the Olympics, everyone will admire her, and she will get rich, but if she does not win, all her effort was in vain.

* p: Michelle wins at the olympics. 
* q: Everyone admires Michelle. 
* r: Michelle will get rich. 
* s: Michelle’s effort was in vain.

The compound proposition becomes
$$
((p \rightarrow (q \and r)) \and ((\neg p) \rightarrow s))
$$
One can use parse trees to analyze formulas.

## Parse Tree

For example, this is a <u>parse tree</u> for the formula

![image-20210917184139066](D:\dev\AllNote\.mdnote\assets\image-20210917184139066.png)

Question: Can a formula be of two (or more) kinds?

For example, can it be both a conjunction and an implication? Or both a negation and a disjunction?

## Claims

* Every formula of $\mathcal{L}^p$ <u>has the same number</u> of occurrences of left and right parentheses.
* Any non-empty proper initial segment of a formula in $\mathcal{L}^p$ has more occurrences of left than right parentheses/ Any non-empty proper terminal segment of a formula in $\mathcal{L}^p$ has fewer occurrences of left than right parentheses.
* Neither a non-empty proper initial segment nor a non-empty proper terminal segment of a formula can itself be a formula of $\mathcal{L}^p$.
* **<u>(Unique Readability Theorem)</u>** Every formula of $\mathcal{L}^p$ is of exactly one of the six forms: an atom, $(\neg A)$, $(A \and B)$, $(A \or B)$, $(A \rightarrow B)$, $(A \leftrightarrow B)$ and in each case, it is of that form in exactly one way.
* To prove such claims, we will use mathematical induction.

## Mathematcial induction

The “natural numbers” are the numbers we use to count things. Before we start, we count 0; as we find things we count 1, 2, etc. The natural numbers form an unbounded sequence
$$
0,1,2,3,4,...
$$
Suppose P names a property. We write $"P(2)"$ to mean that "$2$ has property $P$", or "$P$ holds for 2".

> A statment "every natural number has property P" corresponds to a sequence of statements
> $$
> P(0), P(1), P(2), P(3), ...
> $$

### Principle of Mathematical induction

Suppose we establish **<u>two things</u>**:

* 0 has property of P, and
* whenever a natural number has property P, then the next natural number also has property P.

Then we may conclude that **<u>every</u>** natural number has property P.

![image-20210917185012798](D:\dev\AllNote\.mdnote\assets\image-20210917185012798.png)

### Example

Show that $\sum_{x=0}^{n}x = \frac{n(n+1)}{2}$ for every natural number $n$.

Let $P$ be the property; that is, let $P(n)$ be $\sum_{x=0}^{n}x = \frac{n(n+1)}{2}$.

<u>Step 1 (Base case):</u> The property $P(0)$ is 
$$
\sum_{x=0}^{0}x = \frac{0(0+1)}{2} = 0
$$
Thus 0 has property $P$.

<u>Step 2 (inductive step):</u> Hypothesize that an arbitrary natural number, say $k$, has property $P$ (this is called <u>inductive Hypothesize. I.H.</u>), that is,
$$
\sum_{x=0}^{k}x = \frac{k(k+1)}{2}
$$
We now need to demonstrate that $k+1$ has property $P$, that is,
$$
\begin{align}
\sum_{x=0}^{k+1}x &= (\sum_{x=0}^{k}x) + (k+1) \\
&= \frac{k(k+1)}{2} + (k+1) \tag{by I.H.} \\
&= (\frac{k}{2}+1)(k+1) \\
&= \frac{(k+1)(k+2)}{2}
\end{align}
$$

## 'Simple' induction vs. 'Strong' induction

### Simple Induction

* Base case - show $Q(0)$
* I.H. - $Q(k)$ holds
* I.S. - show $Q(k+1)$ holds
* Conclusion: $Q(k)$ holds for every $k$

### Strong Induction

* Base case - Show $P(0)$
* I.H. - $P(m)$ holds, for every $m \leq k$
* I.S. - show $P(k+1)$ holds
* Conclusion: $P(k)$ holds for every $k$

<u>What is the difference? No difference!</u>

## How to prove properties of formulas

**We want to prove: "Every formulas in $\mathcal{L}^p$ has property $P$"**.

How to prove such a statement? Can we use induction? A formula is not a natural number, <u>but it suffices to prove any one of the following</u>:

* For every natural number $n$, every formula with $n$ or fewer symbols has property $P$.
* For every natural number $n$, every formula with $n$ or fewer connectives has property $P$. 
* For every natural number $n$, every formula whose parse tree has height less than or equal to $n$ has property $P$.
* For every natural number $n$, every formula producible with $n$ or fewer uses of the formation rules has property $P$.

## Recursively defined set

Alternatively, we can use the fact that Form($\mathcal{L}^p$) is a <u>**recursively defined set**</u>, and use <u>**structural induction**</u> to prove properties about formulas in Form($\mathcal{L}^p$).

To define a set of objects recursively, we identify a few core objects as being in the set, and give rules showing how to build new set objects from the old. Formally, a recursive definition of a set consists of:

* I. BASE: A statement that certain objects belong to the set.
* II. RECURSION: A collection of rules indicating how to form new set objects from those already known to be in the set.
* III. RESTRICTION: A statement that no objects belong to the set other than those comming from I, and II.

### Examples

#### Example #1

The set of natural numbers $\mathbb N$ is a recursively defined set with one formation rule ('add 1').

* I. BASE: 0 is a natural number in $\mathbb N$.
* II. RECURSION: If $k$ is a natural number in $\mathbb N$, then $k+1$ is a natural number in $\mathbb N$.
* III. RESTRICTION: No other numbers are in $\mathbb N$.

#### Example #2

The set Form($\mathcal{L}^p$) is a recursively defined set, where the core set in BASE consist of all atomic formulas (proposition symbols), and the RECURSION has 5 formation rules (one for each connective).

### Properties of recursively defined sets

Structural induction for Recursively Defined Sets

Let $S$ be a recursively defined set, and consider a property that objects in $S$ may or may not have. The proof that every object in $S$ satisfies the property consists of:

1. <u>BASE CASE(S)</u>: Show that each obejct in the BASE for $S$ satisfies the property.
2. <u>(COMPOSITE) INDUCTIVE STEP</u>: Show that, for **<u>each</u>** rule in the RECURSION of $S$, if the rule is applied to objects in $S$ that satisfy the property, then the new objects defined by the rule also satisfy the property.

## Structural Induction - applied to From $\mathcal{L}^p$

**<u>Theorem</u>**. Suppose $P$ is a property. If 

* Every atomic formula $p \in Atom(\mathcal{L}^p)$ satisfies property $P$, AND
* If formulas $A$ and $B$ in From($\mathcal{L}^p$) satisfy property $P$, then:
  1. $(\neg A)$ satisfies property $P$.
  2. $(A \and B)$ satisfies has property $P$.
  3. $(A \or B)$ satisfies has property $P$.
  4. $(A \rightarrow B)$ satisfies has property $P$.
  5. $(A \leftrightarrow B)$ satisfies has property $P$.

<u>If follows that every formula in Form($\mathcal{L}^p$) satisfies property $P$.</u>

<u>Note</u>: If the set $S$ is the set of natural numbers, structural induction amounts to classical mathematical induction.

<u>Note</u>: In general, the number of subcases of the composite inductive step in a proof by structural induction equals the number of formation rules in the RECURSION part of the definition of that set (e.g., 1 rule / subcase for $\mathbb N$, and 5 rules / subcases for Form($\mathcal{L}^p$)).

### Example: Parentheses in formulas

To illustrate structural induction, we shall prove the following

> Lemma. Every formula in Form($\mathcal{L}^p$) has an equal number of left and right parentheses.

$Proof$.

We use <u>structural induction</u>. The property to prove is

> $R(A)$: A has an equal number of left and right parentheses

For every formula $A$ in From($\mathcal{L}^p$).

<u>BASE CASE</u>: $A$ is an atom.

$A$ has zero left and right parentheses, as it is only a proposition symbol. Thus $R(A)$ holds.



Notation: For any formula $A$, let $l(A)$ denote the number of '(' in $A$ and $r(A)$ denote the number of ')' in $A$.

Assume $A$ is $(\neg B)$.

<u>INDUCTIVE HYPOTHESIS, the subcase of $\neg$</u>: Formula $B$ has property $P$, i.e, $l(B) = r(B)$.

Then we have
$$
\begin{align}
l((\neg B)) 
&= 1 + l(B) \tag{inspection}\\
&= 1 + r(B) \tag{I.H. : $P(B)$}\\
&= r((\neg B)) \tag{inspection}
\end{align}
$$
<u>INDUCTIVE HYPOTHESIS, the subcase of $\and, \or, \rightarrow, \leftrightarrow$</u>: Formulas $B$ and $C$ both have property $P$. To prove: Each of the formulas $(B \and C)$, $(B \or C)$, $(B \rightarrow C)$ and $(B \leftrightarrow C)$ has property $P$.

Without loss of generality (w.l.o.g.), we consider $(B \and C)$.

We calculate $l((B \and C))$:
$$
\begin{align}
l((B \and C))
&= 1 + l(B) + r(C) \tag{inspection} \\
&= 1 + r(B) + r(C) \tag{I.H.} \\
&= r((B \and C)) \tag{inspection}
\end{align}
$$
n This concludes the proof of the (composite) inductive step, the inductive proof, and thus the Example.

### Example: Back to the Unique Readability Theorem

> Every formula of $\mathcal{L}^p$ is of exactly one of the six forms: an atom, $(\neg A)$, $(A \and B)$, $(A \or B)$, $(A \rightarrow B)$, $(A \leftrightarrow B)$ and in each case, it is of that form in exactly one way.

We want to prove this using structural induction.

<u>BASE CASE</u>: trivial, as every proposition symbol is an atom (first type listed in the Theorem statement).

<u>INDUCTIVE STEP IDEA</u>: 

We will have to consider, $e.g.$, formulas of the form $(B → C)$ (one of the five subcases of the Inductive Step).

#### **Observation / idea**

An example of an “implication” formula (a formula of the type $(B→C)$, where $B$ and $C$ are formulas) which we have to consider is $((p ∧ q)→r)$, which has $B = (p ∧ q)$, and $C = r$.

Question:  Is this the only way to “parse” the formula $((p ∧ q) → r)$? What about parsing the same formula as a conjunction of two formulas, that is:
$$
((p \and q) \rightarrow r) = (B' \and C')
$$
where: $B' = (p$  and $C' = q) \rightarrow r$?

Fortunately, neither $B'$ nor $C'$ is a formula. (Why?)

#### **Does this proof idea always work?**

How can we make sure that such a proof for the Inductive Step works for every formula $(B → C)$?

That is, if we have a formula $(B → C)$ where $B$ and $C$ are both formulas, and $(B → C) = (B' ∧ C'),$ how can we argue that neither $B'$ nor $C'$ can be a formula?

HINT: Can $B'$ or $C'$ have an equal number of left and right parentheses? If not, why not?

To do the proof, we actually need to know more about formulas. This illustrates a common feature of inductive proofs: they often prove more than just the statement given in the theorem.

#### **Proof of the Unique Readlibity Theorem**

**$Proof$.**

Property $P(n)$:

> Every formula $A$ containing at most $n$ connectives satisfies all three of the following properties:
>
> 1. The first symbol of $A$ is either '(' or a proposition symbol.
> 2. $A$ has an equal number of '(' and ')', and each non-empty proper initial segment of $A$ has more '(' than ')'.
> 3. $A$ has a unique construction as a formula.

We will prove that the property $P(n)$ holds for all $n$, by induction on $n$ (the number of connectives).

<u>BASE CASE</u>: 

The statements hold for $n = 0$ (a formula with 0 connectives is a proposition symbol, it has 0 left and right parentheses, and has no non-empty proper initial/terminal segments)

<u>INDUCTIVE STEP</u>:

*Inductive hypothesis*: $P(k)$ holds for some natrual number $k$.

To show that $P(k+1)$ holds, left formula $A$ has $k+1$ connectives.

The proof of the Inductive Step has five subcases, one for each of the formation rules (connectives) in the recursive definition of Form($\mathcal{L}^p$).

<u>First subcase</u>: $A = (\neg B)$, where $\neg$ is the $(k+1)$st connective, and the inductive hypothesis is that $B$ has properties (a), (b), (c).

* (a): By construction, $(\neg B)$ has property (a), since it begins with '('.

* (b): Since $B$ has an equal number of left and right parentheses, so does $(\neg B)$. For the second part of Property (b), we check the following subcases of every possible non-empty proper initial segment, $x$, of $(\neg B)$:

  1. $x$ is “(”: Then $x$ has one “(” symbol, and no “)” symbols
  2. $x$ is “(¬”: Then $x$ has one “(” symbol, and no “)” symbolsu
  3. $x$ is “($¬z$”, for some non-empty proper initial segment $z$ of $B$: Since, by I.H., $z$ has more “(” than “)” symbols, so does $x$
  4. $x$ is “($¬B$”: Since $B$ has equally many “(” and “)” symbols, x has more “(” than “)” symbols

  In every case, $x$ has more '(' than ')' symbols.

  Hence ($\neg B$) has property (b).

* (c): Because $B$ has Property (c), by construction, so does $(\neg B)$.

<u>Other subcases</u>: $\and, \or, \rightarrow, \leftrightarrow$. Assume that $A = (B * C)$ for some formulas $B$ and $C$, where the $(k+1)$st connective is the binary connective $* \in \{\and, \or, \rightarrow, \leftrightarrow \}$.

I.H. : Both $B$ and $C$ have properties (a), (b), (c). Verifying properties (a), (b) for $(B * C)$ is analogous to the case of $\neg$.

**We prove only (c)**. To prove property (c), we must know that

> If the same formula $A$ can be decomposed as $A = (B * C) = (B' * C' )$, for **formulas** $B'$ and $C'$ and binary connective $*'$, then $B = B', * = *'$, and $C = C'$.

Note: $A = (B * C) = (B' *' C')$ means that $(B * C)$ and $(B' *' C')$ are two different decompositions of **the same formula** (same length, and the same sequence of symbols, in the same order).

Recall that $A = (B * C) = (B' *' C')$.

* case (1): If $B'$ has the same length as $B$, then they must be the same string (but start at the second symbol of $A$).
* case (2): $B'$ is a non-empty proper prefix of $B$. Since $B$ and $B'$ are formulas with at most $k$ connectives, the inductive hypothesis applies to them. In particular, they have property (b).

Since $B'$ has the first half of property (b), $B'$ should have an equal number of left and right parentheses.

 Since $B'$ has the second half of property (b), and since $B'$ is a non-empty proper prefix of the formula $B$, it follows that $B'$ should have strictly more left than right parentheses.

We reached a contradiction, so case (2) cannot hold.

* case (3): $B$ is a non-empty proper prefix of $B'$ - impossible, using a similar reasoning as in case (2).

The only case that holds is case (1). Then $A$ has a unique construction, as require dby property (c).

## Precedence rules (for human logicians)

<img src="D:\dev\AllNote\.mdnote\assets\image-20210917210221031.png" alt="image-20210917210221031" style="zoom:50%;" />

### Examples

<img src="D:\dev\AllNote\.mdnote\assets\image-20210917210254127.png" alt="image-20210917210254127" style="zoom:50%;" />

## Scope

<img src="D:\dev\AllNote\.mdnote\assets\image-20210917210533166.png" alt="image-20210917210533166" style="zoom:50%;" />

### Example

<img src="D:\dev\AllNote\.mdnote\assets\image-20210917210548099.png" alt="image-20210917210548099" style="zoom:50%;" />