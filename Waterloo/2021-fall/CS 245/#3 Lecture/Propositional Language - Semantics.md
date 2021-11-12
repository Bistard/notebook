## Syntax vs. Semantics

* <u>Syntax</u> is concerned with the rules used for constructing the formulas in Form($\mathcal{L}^p$).
* This is similar to computer science, where the term syntax refers to the rules governing the composition of well-formed expressions in a programming language.
* The logic equivalent of a “syntax error” is an expression in $\mathcal{L}^p$ that does not belong to Form($\mathcal{L}^p$).
* **<u>Semantics</u>** is concerned with <u>meaning</u>:
  * Atoms (proposition symbols) are intended to express simple propositions (sentences);
  * The connectives take their intended meanings: ¬, ∧, ∨, →, ↔ express “not”, “and”, “(inclusive) or”, “if, then”, and “iff”;
  * The “meaning” of a non-atomic formula, that is, its truth value (true or false) is derived from the truth values of its constituent atomic formulas, and the meanings of the connectives.

### Example

Before finding the “meaning” of a non-atomic formula (its truth value) the formula must be parsed; that is, all subformulas of the formula must be found. 

Example: 

> If you take a class in computers and if you do not understand recursion, you will not pass.

We want to know exactly when this statement is true and when it is false. Define: 

$p$: “You take a class in computers.” 

$q$: “You understand recursion.” 

$r$: “You pass.”

The statement becomes $(p \and \neg q) \rightarrow \neg r$.

### "Meaning" of a formula - truth table

Truth table for $(p \and \neg q) \rightarrow \neg r$:

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922120847503.png" alt="image-20210922120847503" style="zoom:50%;" />

## Truth Valuations

* A <u>truth table</u> list the values of a formula under all possible truth valuations.

  * Fix a set $\{0, 1\}$ of truth values. We interpret 0 as false and 1 as true.

* <u>Definition</u>: A truth valuation is a function $t$
  $$
  t: \text{Atom($\mathcal{L}^p$)} \longrightarrow \{0,1\}
  $$
  <u>Convention</u>: For $A \in \text{Atom($\mathcal{L}^p$)}$ we denote by $A^t$ the value $t(A) \in \{0,1\}$ that $A$ takes under truth valuation $t$.

## Value of formulas under a truth valuation

<u>Definition</u>: Let $t$ be a truth valuation. The <u>value of a formula</u> in Form($\mathcal{L}^p$) with respect to the given truth valuation t is defined recursively as follows:

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922121516810.png" alt="image-20210922121516810" style="zoom:50%;" />

### Example

![image-20210922121834054](D:\dev\AllNote\.mdnote\assets\image-20210922121834054.png)

## Satisfiability

> <u>Definition</u>: We say that a truth valuation $t$ satisfies a formula $A$ in Form($\mathcal{L}^p$) iff $A^t$ = 1.

We use $\sum$ to denote any set of formulas.

> <u>Definition</u>: The value of a set of formulas $\sum$ under truth valuation $t$ is defined as:
> $$
> {\sum}^t 
> \begin{cases}
> 1, &\text{ if for each formula $B \in \sum, B^t = 1$,} \\
> 0, &\text{ otherwise}
> \end{cases}
> $$

> <u>Definition</u>: A set of formulas $\sum \subseteq$ Form($\mathcal{L}^p$) is satisfiable iff there exists a truth valuation $t$ such that ${\sum}^t = 1$. In the other hand, there is no truth valuation $t$ such that ${\sum}^t = 1$, then the set $\sum$ is called <u>**unsatisfiable**</u>.

### Observations

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922122433848.png" alt="image-20210922122433848" style="zoom:67%;" />

### Example: sudoku as Satisfiability (SAT) Problem

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922122639087.png" alt="image-20210922122639087" style="zoom:67%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922122916975.png" alt="image-20210922122916975" style="zoom:67%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922123010691.png" alt="image-20210922123010691" style="zoom:67%;" />

## Tautology and contradiction

> <u>Definition</u>: Formula $A$ is a <u>**tautology**</u> iff is true under all possible truth valuation, i.e., iff for any turth valuation $t$, we have that $A^t = 1$.
>
> <u>Definition</u>: Formula $A$ is a <u>contradiction</u> iff it is false under all possible truth valuations, i.e., iff for every truth valuation $t$, we have that $A^t = 0$.
>
> <u>Definition</u>: Fomula $A$ that is neither a tautology nor a contradiction is called <u>**contingent**</u>.

### Examples

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922123351635.png" alt="image-20210922123351635" style="zoom:67%;" />

### Important Tautology - Law of the excluded middle

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922123449538.png" alt="image-20210922123449538" style="zoom:67%;" />

### Tautology: Observations

If $A $is a tautology that contains the proposition symbol $p$, one can determine a new expression by replacing all instances of $p$ by an arbitrary formula. <u>The resulting formula $A^`$ is also a tautology</u>.

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922123729226.png" alt="image-20210922123729226" style="zoom:67%;" />

> <u>Theorem</u>: Let $A$ be a tautology and let $p_1$, $p_2$, . . . , $p_n$ be the proposition symbols of $A$. Suppose that $B_1, B_2,..., B_n$ are arbitrary formulas. Then, the formula obtained by replacing $p_1 by B_1, p_2 by B_2,..., p_n by B_n$, is a tautology.

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922123844180.png" alt="image-20210922123844180" style="zoom:67%;" />

### Important - Contradiction - Law of contradiction

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922124046409.png" alt="image-20210922124046409" style="zoom:67%;" />

## Three essential laws of thought - Plato

1. Law of identity:

   ​	"Whatever is, is." $p = p$

2. Law of contradiction:

   ​	"Nothing can both be and not be." $\neg (p \and \neg p)$

3. Law of Excluded Middle:

   ​	"Everything must either be, or not be." $(p \or \neg p)$

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922124245021.png" alt="image-20210922124245021" style="zoom:67%;" />

## Tauotological consequence

> <u>Definition</u>: Suppose $\sum \subseteq$ Form($\mathcal{L}^p$) and $A \in$ Form($\mathcal{L}^p$).
>
> $A$ is a <u>tautological consequence</u> of $\sum$ (that is, of the formulas in $\sum$), written as $\sum \models A$, iff for any truth valuation $t$, we have that ${\sum}^t = 1$ implies $A^t = 1$.

> <u>Observations</u>: 
>
> * $\models$ is not a symbol of the formal propositional language and $\sum \models A$ is not a formula.
> * $\sum \models A$ is a statement (in the metalanguage) about $\sum$ and $A$.
> * We write $\sum \not\models A$ for "not $\sum \models A$".
> * If $\sum \models A$, we say that the formulas in $\sum$ (tauto)logically implies formula $A$.

### A special case: $\emptyset \models A$

When $\sum$ is the empty set, we obtain the important special case of tautological consequence, $\empty \models A$.

![image-20210922172142743](D:\dev\AllNote\.mdnote\assets\image-20210922172142743.png)

## Validity of arguments ($\models$) and satisfiability

![image-20210922172428310](D:\dev\AllNote\.mdnote\assets\image-20210922172428310.png)

### Observations

![image-20210922173702665](D:\dev\AllNote\.mdnote\assets\image-20210922173702665.png)

## Tautological Equivalence

> <u>Definition</u>: For two formulas we write:
> $$
> A \models\mid B
> $$
> To denote "$B \models A$ and $A \models B$."

$A$ and $B$ are said to be <u>tautologically equivalent</u> (or simply <u>equivalent</u>) iff $A \models\mid B$ holds.

Tautologically equivalent formulas are assigned the same truth values by any truth valuation.

**Note**

* Tautological equivalence is weaker than equality of formulas. For example:

> If $A = \neg (p \and q)$ and $B = (\neg p \or \neg q)$ then $A \models\mid B$, as can be proved by a truth table, but $A \neq B$.

* ![image-20210922174818843](D:\dev\AllNote\.mdnote\assets\image-20210922174818843.png)

## Proving argument validity by truth table

To prove the tautological consequence $\sum \models A$ (that is, to prove the validity of the argument with premises $\sum$ and conclusion $A$) we must show that any truth valuation $t$ satisfying $\sum$ also satisfies $A$. One way to show this is by using truth tables.

Example: Show that $\{p \rightarrow q, q \rightarrow r\} \models (p \rightarrow r)$.

The premises are $A_1 = p \rightarrow q$ and $A_2 = q \rightarrow r$; the conclusion is $(p \rightarrow r)$.

![image-20210922175323401](D:\dev\AllNote\.mdnote\assets\image-20210922175323401.png)

![image-20210922175437498](D:\dev\AllNote\.mdnote\assets\image-20210922175437498.png)

### How to prove that an argument is not valid

![image-20210922175508289](D:\dev\AllNote\.mdnote\assets\image-20210922175508289.png)



## Size of truth tables

If the formula has $n$ proposition symbols and $m$ occurrences of connectives:

* How many rows does the truth table have? 
  * $2^n$
* How many columns does the truth table have? 
  * $≤ n + m$

We need another method for proving argument validity when the number of proposition symbols is too large.

## Argument validity without truth tables

We use the proof method called “<u>proof by contradiction</u>”.

**<u>ATTENTION</u>**: Please differentiate the construct “<u>proof by contradiction</u>”, from the specific usage of the word “<u>contradiction</u>” in propositional logic, wherein it defines a formula that is always false.

<u>Example</u>: Show that $\{A\rightarrow B, B \rightarrow C\} \models (A \rightarrow C)$.

$Proof.$ Assume the contrary, that is $\{A\rightarrow B, B \rightarrow C\} \not\models (A \rightarrow C)$.

This means that there is a truth valuation $t$ that makes all premises true but the conclusion false, that is,

1. $(A \rightarrow B)^t = 1$,
2. $(B \rightarrow C)^t = 1$,
3. $(A \rightarrow C)^t = 0$.

By (3), we have $A^t = 1$ and $C^t = 0$  (4).

By (1), we have $A^t = 1$ and $B^t = 1$  (5).

By (2), we have $B^t = 1$ and $C^t = 1$, which <u>contradicts</u> to (4).

As we reached a contradiction, our <u>assumption</u> that the argument was invalid was false, hence the opposite is true: The argument is <u>valid</u>.

### Example

![image-20210922180530259](D:\dev\AllNote\.mdnote\assets\image-20210922180530259.png)

![image-20210922180952199](D:\dev\AllNote\.mdnote\assets\image-20210922180952199.png)

## De Morgan's Laws  - (tauto)logical equivalences

Consider the following two statements: 

* It is not true that he is informed and honest. 
* He is either not informed, or he is not honest.

Intuitively, these two statements are logically equivalent. We prove this now. Define $p$ and $q$ to be the statements that “he is informed” and that “he is honest” respectively.

The first statement translates into $¬(p ∧ q)$, whereas the second into $¬p ∨ ¬q$.

![image-20210922181227655](D:\dev\AllNote\.mdnote\assets\image-20210922181227655.png)

## Contrapositives - (tauto)logical equivalences

Consider the following pair of statements: 

* If the customer has paid, the goods must have been delivered. 
* If the goods were not delivered, the customer cannot have paid. 

If $q$ and $p$ stand for “goods were delivered” and “customer paid” respectively, then these two statements translate into $p → q$ and $¬q → ¬p$. 

> <u>Definition</u>: Given an implication of the form ($p → q$), the formula ($¬q → ¬p$) is called the contrapositive of ($p → q$), and the formula ($q → p$) is called the converse of ($p → q$).

![image-20210922181414588](D:\dev\AllNote\.mdnote\assets\image-20210922181414588.png)

## Converse vs. Contrapositive

![image-20210922181449710](D:\dev\AllNote\.mdnote\assets\image-20210922181449710.png)

## Biconditional - (tauto)logical equivalences

Consider the following two statements:

1. $p$ and $q$ have the same truth value
2. if $p$, then $q$, and if $q$ then $p$.

The first statement becomes $p ↔ q$, the second$ (p → q) ∧ (q → p)$. The table below shows that $p ↔ q \models\mid(p → q) ∧ (q → p)$

![image-20210922181756130](D:\dev\AllNote\.mdnote\assets\image-20210922181756130.png)

<u>How to use this in proofs</u>: If we have to prove $A ↔ B (A \text{ iff } B)$, we must prove both the direct implication $A → B$ (the “only if part”), and the converse implication $B → A $(the “if” part).

## Tautological Equivalences - Lemma, Theorems

### Lemma

![image-20210922181934086](D:\dev\AllNote\.mdnote\assets\image-20210922181934086.png)

### Theorem - Replaceability and Duality

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922182058432.png" alt="image-20210922182058432" style="zoom:80%;" />

### Fuzzy Logic: An alternative approach

<img src="D:\dev\AllNote\.mdnote\assets\image-20210922182149742.png" alt="image-20210922182149742" style="zoom:80%;" />

