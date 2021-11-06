# LaTeX Techniques

## others

```latex
\usepackage{amsthm}
```

## Proof

```latex
\begin{proof}
\end{proof}
```

```latex	
\begin{enumerate}
    \item 
\end{enumerate}

\begin{enumerate}[i]
    \item 
\end{enumerate}
```

## Equations
$$
\begin{align*}
    a &= 1 + 2 + 3 + 4 \\
      &= 3 + 7 \\
      &= 10
\end{align*}
$$


$$
\begin{align}
    a &= 1 + 2 + 3 + 4 \\
        &= 3 + 7 \\
        &= 10
\end{align}
$$


$$
\begin{align}
    a &= 1 + 2 + 3 + 4 \\
        &= 3 + 7 \tag*{this is a comment} \\
        &= 10
\end{align}
$$


$$
\begin{align}
    a &= 1 + 2 + 3 + 4 \\
        &= 3 + 7 \tag{this is a comment} \\
        &= 10
\end{align}
$$

$$
ax + b = y  \hspace{1in} ax^2 + bx + c = y
$$

$$
A(x) = \Phi_{\mathcal{A}}^{w}(x) = \sum_{a\in\mathcal{A}}x^{2(a+1)} \tag{if $a$ is odd}
$$



## Symbols

$$
A \models B \text{, } A \vDash b \text{, } C \logequiv D
$$



$$
\infty \text{ } \mathbb R \text{ } \mathbb R^n \text{ } \mathbb N \text{ } \mathbb Z \text{ } \mathbb Q \text{ } \mu \text{ } \theta \text{ } \alpha \text{ } \beta \text{ } \gamma \text{ } \lambda \text{ } \Phi
$$

$$
\mathcal{A} \text{ } \mathcal{M} \text{ } \mathcal{P}
$$


$$
|f(x) - L| < \epsilon, \text{ whenever } 0 < |x-a| < \delta.
$$



$$
\emptyset \text{ } \varnothing
$$



$$
\cup \text{ } \cap \text{ } \leq \text{ } \geq \text{ } > \text{ } < \text{ } \neq \text{ } \doteq \text{ } \equiv \text{ } \approx \text{ } \sim
$$


$$
\subset \text{ } \not\subset \text{ } \subseteq \text{ } \nsubseteq \text{ }
$$


$$
\supset \text{ } \not\supset \text{ } \supseteq \text{ } \nsupseteq
$$


$$
x \in \mathbb R^2
$$



$$
\forall x \in S, \exists y \in S, \text{such that } y > x.
$$



$$
\rightarrow \text{ } \to \text{ } \Rightarrow \text{ } \leftarrow \text{ } \Leftarrow \text{ } \leftrightarrow \text{ } \Leftrightarrow \text{ } \rightleftharpoons \text{ } \mapsto
$$



$$
\pm \text{ } \mp \times \text{ } \div \text{ } \ast \text{ }
$$

$$
\angle \text{ } \triangle
$$


$$
\vec{x} \text{ } \overrightarrow{ABC}
$$

$$
\left. \frac{\partial f}{\partial x} \right|_{s}
$$


$$
n \choose k
$$

$$
\mathcal{A} = \bigcup_{n=0}^{\infty}\mathcal{A}_n
$$



$$
\prescript{}{V}{[T]}_U
$$

$$
(-\infty, \infty)
$$



$$
\lim\limits_{n\rightarrow\infty}
$$



$$
\sum_{i=1}^{n}
$$



$$
\int e^x dx
$$



$$
\int_0^2e^x dx
$$



$$
\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}
$$



$$
\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}
$$



$$
\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}
$$



$$
\left( \begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 5 & 6 & 7 & 8 \end{array} \right)
$$


$$
\begin{equation*}
    A_{m,n} = 
    \begin{pmatrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
    \vdots  & \vdots  & \ddots & \vdots  \\
    a_{m,1} & a_{m,2} & \cdots & a_{m,n} 
    \end{pmatrix}
\end{equation*}
$$


$$
f_n(x) = \begin{cases}
             x(n), & \text{for } 0\leq n\leq 1\\
             x(n-1), & \text{for } 0\leq n\leq 1\\
             x(n-1), & \text{for } 0\leq n\leq 1
         \end{cases}
$$

$$

$$



