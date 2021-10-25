# Propositional Calculus: Essential Laws and Normal Forms



## Simplifications of Logic Formulas

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929155600905.png" alt="image-20210929155600905" style="zoom:50%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929155838690.png" alt="image-20210929155838690" style="zoom:50%;" />

### Important Comments

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929155952594.png" alt="image-20210929155952594" style="zoom:33%;" />

### Simplification: Removing Connectives: $\rightarrow, \leftrightarrow$

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929160159711.png" alt="image-20210929160159711" style="zoom:33%;" />

### Example

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929160302829.png" alt="image-20210929160302829" style="zoom:33%;" />

### Shorcuts (literal)

><u>Definition</u>. A formula is called a **<u>literal</u>** if it is of the form $p$ or $¬p$, where $p$ is a proposition symbol. The two formulas $p$ and $¬p$ are called **<u>complementary literals</u>**.

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929162242821.png" alt="image-20210929162242821" style="zoom:33%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929162252452.png" alt="image-20210929162252452" style="zoom:33%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929162350330.png" alt="image-20210929162350330" style="zoom:33%;" />

## Essential Laws for Propositional Calculus

---

| Law                                                          | Name                |
| ------------------------------------------------------------ | ------------------- |
| $A \or \neg A \logequiv 1 $                                  | Excluded middle law |
| $A \and \neg A \logequiv 0$                                  | Contradiction law   |
| $A \or 0 \logequiv A, A \and 1 \logequiv A$                  | Identity laws       |
| $A \or 1 \logequiv 1, A \and 0 \logequiv 0$                  | Domination laws     |
| $A \or A \logequiv A, A \and A \logequiv A$                  | Idempotent laws     |
| $\neg(\neg A) \logequiv A$                                   | Double-negation law |
| $A \or B \logequiv B \or A, A \and B \logequiv B \and A$     | Commutativity laws  |
| $(A \or B) \or C \logequiv A \or (B \or C)$, $(A \and B) \and C \logequiv A \and (B \and C)$ | Associativity laws  |
| $A \or (B \and C) \logequiv (A \or B) \and (A \or C)$, $A \and (B \or C) \logequiv (A \and B) \or (A \and C)$ | Distributivity laws |
| $\neg(A \and B) \logequiv \neg A \or \neg B$, $\neg (A \or B) \logequiv \neg A \and \neg B$ | De Morgan's laws    |

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929161602247.png" alt="image-20210929161602247" style="zoom:33%;" />

### Further Laws

---

**absorption laws**
$$
A \or (A \and B) \logequiv A \\
A \and (A \or B) \logequiv A
$$
**Another Important Law (and its dual):**
$$
(A \and B) \or (\neg A \and B) \logequiv B \\
(A \or B) \and (\neg A \or B) \logequiv B \\
$$

## Normal Forms

Formulas can be transformed into standard forms so that they become more convenient for symbolic manipulations and make identification and comparison of two formulas easier.

There are <u>two types</u> of normal forms in propositional calculus:

* <u>Disjunctive Normal Form</u>
* <u>Conjunctive Normal Form</u>

> <u>Definition</u>. A disjunction with literals as disjuncts is called a **disjunctive clause**.

> <u>Definition</u>. A conjunction with literals as conjuncts is called a **conjunctive clause**.

​	Examples:

* $(p \or q \or \neg r)$ is a disjunctive clause
* $(\neg p \and s \and \neg q)$ is a conjunctive clause

Disjunctive and conjunctive clauses are simply called **<u>clauses</u>**.

### DNF and CNF

> <u>Definition</u>. A disjunction with conjunctive clauses as its disjuncts is said to be in **Disjunctive Normal Form (DNF)**.

> <u>Definition</u>. A conjunction with disjunctive clauses as its conjuncts is said to be in **Conjunctive Normal Form (CNF)**.

Examples:

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929162926550.png" alt="image-20210929162926550" style="zoom:33%;" />

### Simple Summary

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929163129013.png" alt="image-20210929163129013" style="zoom:33%;" />

### DNF and CNF examples

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929163412308.png" alt="image-20210929163412308" style="zoom:33%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929163423840.png" alt="image-20210929163423840" style="zoom:33%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929163917717.png" alt="image-20210929163917717" style="zoom:33%;" />

### How to Obtain Normal Forms?

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929164240388.png" alt="image-20210929164240388" style="zoom:50%;" />

By the Theorem of Replaceability of Tautologically Equivalent Formulas, we can use the equivalences on the previous slide to convert any formula into a tautologically equivalent formula in normal form:

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929164418772.png" alt="image-20210929164418772" style="zoom:25%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929164429276.png" alt="image-20210929164429276" style="zoom:50%;" />

#### Example

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929164632417.png" alt="image-20210929164632417" style="zoom:33%;" />

### Algorithm for Conjunctive Normal Form

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929164717381.png" alt="image-20210929164717381" style="zoom:50%;" />

**Example of Step 3.3 in converting to CNF**

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929165512311.png" alt="image-20210929165512311" style="zoom:50%;" />

### Existence of Normal Form

> **Theorem1**. Any formula $A \in Form(\mathcal{L^p})$ is tautologically equivalent to some formula in **disjunctive normal form**.

> **Theorem2**. Any formula $A \in Form(\mathcal{L^p})$ is tautologically equivalent to some formula in **conjunctive normal form**.

$proof. (\text{Theorem 1})$

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929165843168.png" alt="image-20210929165843168" style="zoom:33%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929170205534.png" alt="image-20210929170205534" style="zoom:33%;" />

### Disjunctive normal forms from truth tables

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929170302482.png" alt="image-20210929170302482" style="zoom:33%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929170929701.png" alt="image-20210929170929701" style="zoom:33%;" />

### CNF of $f$ obtained from the truth table of $f$

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929171141006.png" alt="image-20210929171141006" style="zoom:33%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20210929171200514.png" alt="image-20210929171200514" style="zoom:33%;" />
