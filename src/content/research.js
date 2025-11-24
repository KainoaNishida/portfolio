export const researchContent = {
  title: "research",
  subtitle: "current research in deep learning and computational biology at the zhang lab, uc irvine.",
  intro: "i'm really fortunate to work on some very cool research projects in the zhang lab, where we use machine learning and deep learning to tackle questions in genomics. we uncover patterns that are hard to see otherwise, build intuitive visualizations, and speed up biological experiments by relying on fast model inference instead of slow, labor-intensive measurements.",
  projects: [
    {
      id: 1,
      title: 'rna flux',
      shortDescription: 'Developing continuous normalizing flow models to predict cell fate transitions from single-cell RNA-seq data.',
      longDescription: "RNA Flux treats cell-state dynamics as a Neural ODE (continuous normalizing flow) over gene expression, replacing hand-crafted kinetics with a learned vector field f(x,t;θ). It jointly infers latent time and trajectory-consistent flows that capture branching/fate transitions. Trained via change-of-variables likelihood with smoothness priors, it recovers velocities from the flow and is benchmarked on scRNA-seq (spliced/unspliced) for coherence and branch recovery against standard baselines.",
      tech: ['Neural ODEs / Continuous Flows', 'RNA Velocity', 'Trajectory Inference', 'Variational Autoencoders'],
      period: 'January 2024 - Present',
      year: '2024',
      image: `${import.meta.env.BASE_URL}rna-flux-logo.png`
    },
    {
      id: 2,
      title: 'omega genome',
      shortDescription: 'Making large-scale DNA foundation models more computationally accessible through knowledge distillation.',
      longDescription: "Omega Genome compresses large DNA foundation models into small, fast students via knowledge distillation. We fine-tune a teacher (e.g., Nucleotide Transformer/DNABERT) and train lightweight students on teacher logits/representations to retain accuracy on enhancers, promoters, splice sites, variant effects, and zebrafish enhancers—while cutting latency and memory. Evaluation follows the Nucleotide Transformer v2 benchmarks with accuracy/F1/ROC-AUC.",
      tech: ['Knowledge Distillation', 'k-mer Tokenization', 'DNA Foundation Models'],
      period: 'March 2024 - Present',
      year: '2024',
      image: `${import.meta.env.BASE_URL}kd-logo.png`
    },
    {
      id: 3,
      title: 'HiCFM',
      shortDescription: 'Using genomic language models to predict 3D architectures of DNA sequences while preserving long context resolutions.',
      longDescription: "HiCFM predicts Hi-C contact maps directly from DNA sequence using a long-context encoder and a geometry-aware 2D decoder. It preserves hundreds-of-kb context to improve distal contacts beyond Akita/Orca and applies distance-aware normalization/symmetry during training. We evaluate on ENCODE/4DN cell lines with distance-binned correlations, loop/TAD recovery, and throughput/memory benchmarks.",
      tech: ['Genomic Language Models', 'Hi-C', '3D Genome Architecture', 'Long Context Attention'],
      period: 'June 2025 - Present',
      year: '2025',
      hasPhotos: true,
      photoFolder: 'HiCFM',
      photos: [
        `${import.meta.env.BASE_URL}project_photos/HiCFM/result.jpg`
      ]
    }
  ]
};

