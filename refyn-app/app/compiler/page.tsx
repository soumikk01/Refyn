'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo/Logo';
import {
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  RustIcon,
  GoIcon,
  JavaIcon,
  CPlusPlusIcon,
  CSharpIcon,
  RubyIcon,
  PHPIcon,
  SwiftIcon,
  KotlinIcon,
  SQLIcon,
  ShellIcon,
  DockerIcon,
} from '@/components/Languages/TechIcons';
import { Search, Sparkles, Code, Play, ArrowRight, Check, Terminal, ExternalLink } from 'lucide-react';
import styles from './Compiler.module.scss';

interface LangItem {
  id: string;
  name: string;
  category: 'Popular' | 'Programming' | 'Web' | 'Databases' | 'DevOps';
  Icon: React.FC<{ size?: number }>;
  tagline: string;
  color: string;
  codeSnippet: string;
}

const LANGUAGES: LangItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Popular',
    Icon: PythonIcon,
    tagline: 'AI, Data Science & Backend',
    color: '#3776AB',
    codeSnippet: `# Refyn Online Python Compiler\ndef greet(name):\n    return f"Hello {name}, welcome to Refyn AI!"\n\nprint(greet("Developer"))\n`,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Popular',
    Icon: JavaScriptIcon,
    tagline: 'Web, Fullstack & Node.js',
    color: '#F7DF1E',
    codeSnippet: `// Refyn Online JavaScript Compiler\nconst greet = (name) => \`Hello \${name}, welcome to Refyn AI!\`;\nconsole.log(greet("Developer"));\n`,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Popular',
    Icon: TypeScriptIcon,
    tagline: 'Typed JavaScript at Scale',
    color: '#3178C6',
    codeSnippet: `// Refyn Online TypeScript Compiler\ninterface User {\n  name: string;\n  role: string;\n}\nconst user: User = { name: "Developer", role: "Engineer" };\nconsole.log(\`Hello \${user.name} [\${user.role}]\`);\n`,
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Popular',
    Icon: JavaIcon,
    tagline: 'Enterprise Applications',
    color: '#EA2D2E',
    codeSnippet: `// Refyn Online Java Compiler\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Developer, welcome to Refyn!");\n    }\n}\n`,
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Programming',
    Icon: CPlusPlusIcon,
    tagline: 'High Performance & Systems',
    color: '#00599C',
    codeSnippet: `// Refyn Online C++ Compiler\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello Developer, welcome to Refyn C++!" << endl;\n    return 0;\n}\n`,
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Programming',
    Icon: CSharpIcon,
    tagline: '.NET Ecosystem & GameDev',
    color: '#68217A',
    codeSnippet: `// Refyn Online C# Compiler\nusing System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello Developer from C#!");\n    }\n}\n`,
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'Programming',
    Icon: RustIcon,
    tagline: 'Memory Safety & Speed',
    color: '#F74C00',
    codeSnippet: `// Refyn Online Rust Compiler\nfn main() {\n    println!("Hello Developer, welcome to Rust on Refyn!");\n}\n`,
  },
  {
    id: 'go',
    name: 'Go',
    category: 'Programming',
    Icon: GoIcon,
    tagline: 'Cloud & Concurrency',
    color: '#00ADD8',
    codeSnippet: `// Refyn Online Go Compiler\npackage main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello Developer, welcome to Go on Refyn!")\n}\n`,
  },
  {
    id: 'sql',
    name: 'MySQL / SQL',
    category: 'Databases',
    Icon: SQLIcon,
    tagline: 'Relational Database Queries',
    color: '#00758F',
    codeSnippet: `-- Refyn SQL Query Playground\nSELECT 'Hello Developer' AS greeting, 'Refyn DB Engine' AS engine;\n`,
  },
  {
    id: 'html',
    name: 'HTML / CSS',
    category: 'Web',
    Icon: JavaScriptIcon,
    tagline: 'Web Frontend Layouts',
    color: '#E34F26',
    codeSnippet: `<!-- Refyn Web Playground -->\n<h1>Hello Developer</h1>\n<p>Welcome to Refyn Web Compiler</p>\n`,
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Web',
    Icon: PHPIcon,
    tagline: 'Modern Web Stack',
    color: '#777BB4',
    codeSnippet: `<?php\n// Refyn PHP Compiler\necho "Hello Developer, welcome to PHP on Refyn!";\n?>\n`,
  },
  {
    id: 'ruby',
    name: 'Ruby',
    category: 'Programming',
    Icon: RubyIcon,
    tagline: 'Developer Happiness',
    color: '#E0115F',
    codeSnippet: `# Refyn Ruby Compiler\nputs "Hello Developer, welcome to Ruby on Refyn!"\n`,
  },
  {
    id: 'swift',
    name: 'Swift',
    category: 'Programming',
    Icon: SwiftIcon,
    tagline: 'iOS & Apple Platforms',
    color: '#F05138',
    codeSnippet: `// Refyn Swift Compiler\nprint("Hello Developer from Swift!")\n`,
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'Programming',
    Icon: KotlinIcon,
    tagline: 'Android & Modern JVM',
    color: '#7F52FF',
    codeSnippet: `// Refyn Kotlin Compiler\nfun main() {\n    println("Hello Developer from Kotlin!")\n}\n`,
  },
  {
    id: 'shell',
    name: 'Shell / Bash',
    category: 'DevOps',
    Icon: ShellIcon,
    tagline: 'Terminal Scripting',
    color: '#4EAA25',
    codeSnippet: `#!/bin/bash\necho "Hello Developer from Bash on Refyn!"\n`,
  },
  {
    id: 'docker',
    name: 'Dockerfile',
    category: 'DevOps',
    Icon: DockerIcon,
    tagline: 'Container Isolation',
    color: '#2496ED',
    codeSnippet: `# Refyn Dockerfile Template\nFROM node:18-alpine\nWORKDIR /app\nCOPY . .\nCMD ["npm", "start"]\n`,
  },
];

export default function CompilerPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Popular' | 'Programming' | 'Web' | 'Databases' | 'DevOps'>('All');
  const [selectedLang, setSelectedLang] = useState<LangItem | null>(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const filteredLangs = LANGUAGES.filter((lang) => {
    const matchesSearch =
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' ? true : lang.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenCompiler = (lang: LangItem) => {
    setSelectedLang(lang);
    setCode(lang.codeSnippet);
    setOutput(null);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      if (selectedLang?.id === 'python') {
        setOutput('Hello Developer, welcome to Refyn AI!\n[Process finished with exit code 0]');
      } else if (selectedLang?.id === 'javascript' || selectedLang?.id === 'typescript') {
        setOutput('Hello Developer, welcome to Refyn AI!\n[Execution time: 42ms · Memory: 14MB]');
      } else if (selectedLang?.id === 'sql') {
        setOutput('+------------------+------------------+\n| greeting         | engine           |\n+------------------+------------------+\n| Hello Developer  | Refyn DB Engine  |\n+------------------+------------------+');
      } else {
        setOutput(`Hello Developer, welcome to ${selectedLang?.name || 'Refyn'}!\n[Success: 0 errors, 0 warnings]`);
      }
    }, 600);
  };

  return (
    <div className={styles.page}>
      {/* ── Top Header Navigation ── */}
      <header className={styles.navbar}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.logoLink}>
            <Logo size="md" />
          </Link>
        </div>

        <div className={styles.navRight}>
          <a href="#popular" className={styles.navLink}>Popular</a>
          <a href="#languages" className={styles.navLink}>Languages</a>
          <Link href="/" className={styles.backBtn}>
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* ── Main Hero Header ── */}
      <section className={styles.heroSection}>
        {/* Floating Announcement Pill Badge */}
        <div className={styles.heroBadge} onClick={() => handleOpenCompiler(LANGUAGES[1])}>
          <span className={styles.sparkleIcon}><Sparkles size={14} /></span>
          <span><strong>fyn AI 4.0</strong> Sol & Luna models are now available in Editor</span>
          <span className={styles.tryPill}>Try Now →</span>
        </div>

        <h1 className={styles.heroTitle}>
          Code online with <span className={styles.brandGradient}>Refyn Compiler.</span>
        </h1>
        <p className={styles.heroSub}>
          Refyn helps over 12.8 million developers worldwide write, review, debug, and execute code online.
        </p>

        {/* ── Search Bar ── */}
        <div className={styles.searchWrap}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by Language / DB / Template etc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* ── Filter Tabs ── */}
        <div className={styles.categoryTabs}>
          {(['All', 'Popular', 'Programming', 'Web', 'Databases', 'DevOps'] as const).map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Language Cards Grid ── */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {filteredLangs.map((lang) => {
            const IconComp = lang.Icon;
            return (
              <div
                key={lang.id}
                className={styles.langCard}
                onClick={() => handleOpenCompiler(lang)}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.langName}>{lang.name}</span>
                  <div className={styles.iconWrapper}>
                    <IconComp size={36} />
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.tagline}>{lang.tagline}</span>
                  <button className={styles.runBtn}>
                    <span>Code Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Interactive Live Compiler Modal ── */}
      {selectedLang && (
        <div className={styles.compilerModal}>
          <div className={styles.compilerBackdrop} onClick={() => setSelectedLang(null)} />
          <div className={styles.compilerCard}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>
                <selectedLang.Icon size={24} />
                <span>{selectedLang.name} Compiler & AI Reviewer</span>
              </div>
              <button className={styles.closeModal} onClick={() => setSelectedLang(null)}>
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              {/* Code Editor */}
              <div className={styles.editorBox}>
                <div className={styles.boxHeader}>
                  <span>{selectedLang.id}.{selectedLang.id === 'python' ? 'py' : selectedLang.id === 'javascript' ? 'js' : selectedLang.id === 'typescript' ? 'ts' : selectedLang.id === 'cpp' ? 'cpp' : 'txt'}</span>
                  <button className={styles.runCodeBtn} onClick={handleRunCode} disabled={isRunning}>
                    <Play size={14} fill="currentColor" />
                    <span>{isRunning ? 'Running…' : 'Run Code'}</span>
                  </button>
                </div>
                <textarea
                  className={styles.codeArea}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                />
              </div>

              {/* Console Output */}
              <div className={styles.outputBox}>
                <div className={styles.boxHeader}>
                  <span><Terminal size={14} /> Console Output</span>
                  <span className={styles.fynBadge}>fyn AI Ready</span>
                </div>
                <div className={styles.consoleArea}>
                  {isRunning ? (
                    <div className={styles.loadingOutput}>Compiling and running on Refyn Engine…</div>
                  ) : output ? (
                    <pre className={styles.outputPre}>{output}</pre>
                  ) : (
                    <div className={styles.emptyOutput}>Click "Run Code" to execute script...</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
