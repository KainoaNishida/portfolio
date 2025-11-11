import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import BlogPost from '../components/BlogPost';
import Footer from '../components/sections/Footer';

const BlogPage = () => {
  const posts = useMemo(() => [
    {
      id: 2,
      title: 'understanding tvelo: a deep dive into rna velocity inference',
      date: 'january 2025',
      tags: ['machine learning', 'computational biology', 'genomics'],
      excerpt: 'a comprehensive exploration of tvelo, an ode-based framework for rna velocity that models unspliced and spliced transcript dynamics using neural networks and gene-specific kinetic parameters.',
      content: null
    },
    {
      id: 1,
      title: 'robot baseball: solving jane street\'s november 2025 problem',
      date: 'november 2025',
      tags: ['game theory', 'dynamic programming'],
      excerpt: 'finding the optimal strike zone that maximizes the probability of reaching a full count in robot baseball, where perfect rationality meets probabilistic modeling.',
      solved: true,
      // content: [
      //   {
      //     heading: 'the problem',
      //     paragraphs: [
      //       'Baseball is a game of probabilities, but when the players are robots and every decision is perfectly rational, the sport becomes a playground for mathematics. Jane Street\'s Robot Baseball problem asks us to find the strike zone that makes the game most exciting — specifically, to maximize the chance an at-bat reaches a "full count" (3 balls, 2 strikes).',
      //       'In this game, the pitcher and batter simultaneously choose strategies at each count. The pitcher decides whether to throw a strike or a ball, while the batter decides whether to swing or wait. If the batter swings at a strike, there\'s a probability p that it becomes a home run (worth 4 points), otherwise it\'s a strike. The key parameter p determines the balance between risk and reward.'
      //     ]
      //   },
      //   {
      //     heading: 'modeling the game',
      //     paragraphs: [
      //       'The game state is defined by (balls, strikes), where balls range from 0-4 and strikes from 0-3. Terminal states include:',
      //       'Walk (4 balls): +1 point for the batter',
      //       'Strikeout (3 strikes): +0 points',
      //       'Home run (swung strike with probability p): +4 points',
      //       'This creates a finite state space where we can model transitions probabilistically based on the players\' equilibrium strategies.'
      //     ]
      //   },
      //   {
      //     heading: 'game theory and nash equilibrium',
      //     paragraphs: [
      //       'At each count (b, s), both players choose mixed strategies in a simultaneous game. The Nash equilibrium occurs when each player randomizes to make the other indifferent between their options.',
      //       'Due to symmetry in the problem structure, both players choose their strategies with equal probability at equilibrium. This symmetry simplifies the analysis and allows us to compute expected payoffs recursively.',
      //       'The expected value for the batter at state (b, s) depends on the equilibrium probabilities and the parameter p, creating a system of equations we solve through dynamic programming.'
      //     ]
      //   },
      //   {
      //     heading: 'dynamic programming solution',
      //     paragraphs: [
      //       'Since future rewards depend only on the current count, this is a Markov decision process. We solve it using backward induction:',
      //       'Terminal states: V(4, s) = 1, V(b, 3) = 0, V(home run) = 4',
      //       'Recursive relationship: V(b, s) = E_optimal[reward or V(b\', s\')]',
      //       'Work backwards from terminal states to compute expected payoffs',
      //       'Once we have the value function, we compute the probability of reaching (3, 2) under optimal play by tracking the transition probabilities through the state space.'
      //     ]
      //   },
      //   {
      //     heading: 'optimization',
      //     paragraphs: [
      //       'The probability of reaching full count, q(p), depends on the parameter p. Small p means few home runs and more conservative play, while large p encourages aggressive swinging.',
      //       'Through careful calibration — using binary search or gradient-based optimization — we find that the full count probability is maximized at q_max ≈ 0.295968 when p ≈ 0.226973.',
      //       'This optimal p creates a delicate balance: frequent enough home runs to make swinging attractive, but not so frequent that at-bats end too quickly.'
      //     ]
      //   },
      //   {
      //     heading: 'results and insights',
      //     paragraphs: [
      //       'Under optimal play with p ≈ 0.226973, the game statistics reveal:',
      //       '68% strikeout rate — the game is remarkably pitcher-dominant',
      //       '21% walk rate',
      //       '11% home run rate',
      //       'Slash line: .139 / .318 / .556',
      //       'The optimal "robot league" balances excitement with strategic depth. Most at-bats end in strikeouts, but home runs are frequent enough to keep the game thrilling. The high walk rate reflects the equilibrium where pitchers must sometimes throw balls to avoid predictable patterns.'
      //     ]
      //   },
      //   {
      //     heading: 'broader connections',
      //     paragraphs: [
      //       'This problem elegantly combines several mathematical concepts:',
      //       'Game theory: zero-sum equilibria and minimax strategies in competitive settings',
      //       'Dynamic programming: solving finite-horizon stochastic games through backward induction',
      //       'Probabilistic modeling: Markov decision processes with mixed strategies',
      //       'Similar equilibrium-based modeling appears in baseball analytics, poker AI, and competitive game theory. The problem demonstrates how simple rules can create complex strategic interactions that require sophisticated mathematical tools to solve.'
      //     ]
      //   },
      //   {
      //     heading: 'reflection',
      //     paragraphs: [
      //       'Solving this problem reinforced the beauty of symmetry in game theory and the power of dynamic programming for sequential decision-making. The elegance lies in how a relatively simple game structure produces rich strategic behavior.',
      //       'The solution process required patience in modeling, careful attention to edge cases, and iterative refinement of the optimization approach. It\'s a perfect example of how mathematics can reveal insights about competitive systems that aren\'t immediately obvious from intuition alone.'
      //     ]
      //   }
      // ]
      content: null
    }
  ], []);

  return (
    <>
      <section id="blog" className="py-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 font-mono lowercase">
              blog
            </h2>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
              thoughts on problem solving, mathematics, and computation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
              <p>
                this is where i'll start journaling—a place to jot down what I'm learning, what's working, and what isn't. writing helps me make sense of tricky ideas, track my progress, and hopefully share something useful with anyone on a similar path. whether I'm breaking down a tough problem, exploring a new concept, or reflecting on an experience, think of this as both my personal notebook and a resource you're welcome to borrow from.
              </p>
            </div>
          </motion.div>

          <div className="space-y-0">
            {posts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;


