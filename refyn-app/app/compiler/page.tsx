'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
import {
  Search,
  Sparkles,
  Code,
  Play,
  ArrowRight,
  Check,
  Terminal,
  Folder,
  FileCode,
  FileText,
  Sliders,
  X,
  ChevronDown,
  Zap,
  ShieldCheck,
  Cpu,
  Send,
  RotateCcw,
  GitBranch,
  Package,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import styles from './Compiler.module.scss';

interface LangItem {
  id: string;
  name: string;
  ext: string;
  category: 'Popular' | 'Programming' | 'Web' | 'Databases' | 'DevOps';
  Icon: React.FC<{ size?: number }>;
  tagline: string;
  color: string;
  codeSnippet: string;
  utilsSnippet: string;
}

const LANGUAGES: LangItem[] = [
  {
    id: 'python',
    name: 'Python',
    ext: 'py',
    category: 'Popular',
    Icon: PythonIcon,
    tagline: 'AI, Data Science & Backend',
    color: '#3776AB',
    codeSnippet: `# Refyn Online Python Compiler & AI Reviewer
from dataclasses import dataclass

@dataclass
class User:
    user_id: int
    name: str
    role: str

user = User(user_id=101, name="Developer", role="Engineer")

def process_user(u: User) -> str:
    # AI Tip: Type hinting enabled with zero runtime overhead
    return f"Hello {u.name} [{u.role}] - Welcome to Refyn AI Workspace!"

if __name__ == "__main__":
    print(process_user(user))
`,
    utilsSnippet: `# Refyn Helper Functions
def format_memory(bytes_size: int) -> str:
    return f"{bytes_size / (1024 * 1024):.2f} MB"
`,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    ext: 'js',
    category: 'Popular',
    Icon: JavaScriptIcon,
    tagline: 'Web, Fullstack & Node.js',
    color: '#F7DF1E',
    codeSnippet: `// Refyn Online JavaScript Compiler & AI Reviewer
const user = {
  id: 101,
  name: "Developer",
  role: "Engineer"
};

function processUser(u) {
  // AI Tip: Clean ES6 string formatting
  return \`Hello \${u.name} [\${u.role}] - Welcome to Refyn AI Workspace!\`;
}

console.log(processUser(user));
`,
    utilsSnippet: `export function formatTime(ms) {
  return \`\${ms}ms\`;
}
`,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    ext: 'ts',
    category: 'Popular',
    Icon: TypeScriptIcon,
    tagline: 'Typed JavaScript at Scale',
    color: '#3178C6',
    codeSnippet: `// Refyn Online TypeScript Compiler & AI Reviewer
interface User {
  id: number;
  name: string;
  role: 'Admin' | 'Engineer' | 'Lead';
}

const user: User = {
  id: 101,
  name: "Developer",
  role: "Engineer"
};

function processUser(u: User): string {
  // AI Tip: Clean string formatting with zero runtime overhead
  return \`Hello \${u.name} [\${u.role}] - Welcome to Refyn AI Workspace!\`;
}

console.log(processUser(user));
`,
    utilsSnippet: `export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
`,
  },
  {
    id: 'java',
    name: 'Java',
    ext: 'java',
    category: 'Popular',
    Icon: JavaIcon,
    tagline: 'Enterprise Applications',
    color: '#EA2D2E',
    codeSnippet: `// Refyn Online Java Compiler & AI Reviewer
public class Main {
    static class User {
        int id;
        String name;
        String role;
        User(int id, String name, String role) {
            this.id = id;
            this.name = name;
            this.role = role;
        }
    }

    public static String processUser(User u) {
        return "Hello " + u.name + " [" + u.role + "] - Welcome to Refyn AI Workspace!";
    }

    public static void main(String[] args) {
        User user = new User(101, "Developer", "Engineer");
        System.out.println(processUser(user));
    }
}
`,
    utilsSnippet: `public class Utils {
    public static String getVersion() {
        return "v1.4.0";
    }
}
`,
  },
  {
    id: 'cpp',
    name: 'C++',
    ext: 'cpp',
    category: 'Programming',
    Icon: CPlusPlusIcon,
    tagline: 'High Performance & Systems',
    color: '#00599C',
    codeSnippet: `// Refyn Online C++ Compiler & AI Reviewer
#include <iostream>
#include <string>

struct User {
    int id;
    std::string name;
    std::string role;
};

std::string processUser(const User& u) {
    return "Hello " + u.name + " [" + u.role + "] - Welcome to Refyn AI Workspace!";
}

int main() {
    User user{101, "Developer", "Engineer"};
    std::cout << processUser(user) << std::endl;
    return 0;
}
`,
    utilsSnippet: `// C++ Utility Functions
#include <sstream>
template <typename T>
std::string toString(const T& val) {
    std::ostringstream ss;
    ss << val;
    return ss.str();
}
`,
  },
  {
    id: 'csharp',
    name: 'C#',
    ext: 'cs',
    category: 'Programming',
    Icon: CSharpIcon,
    tagline: '.NET Ecosystem & GameDev',
    color: '#68217A',
    codeSnippet: `// Refyn Online C# Compiler & AI Reviewer
using System;

class Program {
    struct User {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
    }

    static string ProcessUser(User u) {
        return $"Hello {u.Name} [{u.Role}] - Welcome to Refyn AI Workspace!";
    }

    static void Main() {
        var user = new User { Id = 101, Name = "Developer", Role = "Engineer" };
        Console.WriteLine(ProcessUser(user));
    }
}
`,
    utilsSnippet: `namespace Refyn {
    public static class Utils {
        public const string Version = "1.4.0";
    }
}
`,
  },
  {
    id: 'rust',
    name: 'Rust',
    ext: 'rs',
    category: 'Programming',
    Icon: RustIcon,
    tagline: 'Memory Safety & Speed',
    color: '#F74C00',
    codeSnippet: `// Refyn Online Rust Compiler & AI Reviewer
struct User {
    id: u32,
    name: String,
    role: String,
}

fn process_user(u: &User) -> String {
    format!("Hello {} [{}] - Welcome to Refyn AI Workspace!", u.name, u.role)
}

fn main() {
    let user = User {
        id: 101,
        name: String::from("Developer"),
        role: String::from("Engineer"),
    };
    println!("{}", process_user(&user));
}
`,
    utilsSnippet: `pub fn version() -> &'static str {
    "1.4.0"
}
`,
  },
  {
    id: 'go',
    name: 'Go',
    ext: 'go',
    category: 'Programming',
    Icon: GoIcon,
    tagline: 'Cloud & Concurrency',
    color: '#00ADD8',
    codeSnippet: `// Refyn Online Go Compiler & AI Reviewer
package main

import "fmt"

type User struct {
    ID   int
    Name string
    Role string
}

func processUser(u User) string {
    return fmt.Sprintf("Hello %s [%s] - Welcome to Refyn AI Workspace!", u.Name, u.Role)
}

func main() {
    u := User{ID: 101, Name: "Developer", Role: "Engineer"}
    fmt.Println(processUser(u))
}
`,
    utilsSnippet: `package main

func WorkspaceVersion() string {
    return "1.4.0"
}
`,
  },
  {
    id: 'sql',
    name: 'MySQL / SQL',
    ext: 'sql',
    category: 'Databases',
    Icon: SQLIcon,
    tagline: 'Relational Database Queries',
    color: '#00758F',
    codeSnippet: `-- Refyn SQL Query & Schema Analyzer
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(50)
);

INSERT INTO users VALUES (101, 'Developer', 'Engineer');

SELECT 
  CONCAT('Hello ', name, ' [', role, '] - Welcome to Refyn AI Workspace!') AS greeting
FROM users;
`,
    utilsSnippet: `-- Utility Schema Definitions
CREATE INDEX idx_users_role ON users(role);
`,
  },
  {
    id: 'html',
    name: 'HTML / CSS',
    ext: 'html',
    category: 'Web',
    Icon: JavaScriptIcon,
    tagline: 'Web Frontend Layouts',
    color: '#E34F26',
    codeSnippet: `<!-- Refyn Web Frontend Sandbox -->
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body { font-family: sans-serif; background: #0b0f19; color: #00ffcc; padding: 2rem; }
    .card { background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; border: 1px solid #00c4a7; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Hello Developer [Engineer]</h2>
    <p>Welcome to Refyn Web Compiler Workspace!</p>
  </div>
</body>
</html>
`,
    utilsSnippet: `/* Global Refyn Styles */
body { margin: 0; padding: 0; }
`,
  },
  {
    id: 'php',
    name: 'PHP',
    ext: 'php',
    category: 'Web',
    Icon: PHPIcon,
    tagline: 'Modern Web Stack',
    color: '#777BB4',
    codeSnippet: `<?php
// Refyn Online PHP Compiler & AI Reviewer
class User {
    public int $id;
    public string $name;
    public string $role;
    
    public function __construct(int $id, string $name, string $role) {
        $this->id = $id;
        $this->name = name;
        $this->role = $role;
    }
}

$user = new User(101, 'Developer', 'Engineer');

function processUser(User $u): string {
    return "Hello {$u->name} [{$u->role}] - Welcome to Refyn AI Workspace!";
}

echo processUser($user);
?>
`,
    utilsSnippet: `<?php
function getRefynVersion(): string {
    return "1.4.0";
}
?>
`,
  },
  {
    id: 'ruby',
    name: 'Ruby',
    ext: 'rb',
    category: 'Programming',
    Icon: RubyIcon,
    tagline: 'Developer Happiness',
    color: '#E0115F',
    codeSnippet: `# Refyn Online Ruby Compiler & AI Reviewer
User = Struct.new(:id, :name, :role)

user = User.new(101, "Developer", "Engineer")

def process_user(u)
  "Hello #{u.name} [#{u.role}] - Welcome to Refyn AI Workspace!"
end

puts process_user(user)
`,
    utilsSnippet: `# Ruby Helpers
def refyn_version
  "1.4.0"
end
`,
  },
  {
    id: 'swift',
    name: 'Swift',
    ext: 'swift',
    category: 'Programming',
    Icon: SwiftIcon,
    tagline: 'iOS & Apple Platforms',
    color: '#F05138',
    codeSnippet: `// Refyn Online Swift Compiler & AI Reviewer
struct User {
    let id: Int
    let name: String
    let role: String
}

func processUser(_ u: User) -> String {
    return "Hello \(u.name) [\(u.role)] - Welcome to Refyn AI Workspace!"
}

let user = User(id: 101, name: "Developer", role: "Engineer")
print(processUser(user))
`,
    utilsSnippet: `func getWorkspaceInfo() -> String {
    return "Refyn Swift Engine v1.4"
}
`,
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    ext: 'kt',
    category: 'Programming',
    Icon: KotlinIcon,
    tagline: 'Android & Modern JVM',
    color: '#7F52FF',
    codeSnippet: `// Refyn Online Kotlin Compiler & AI Reviewer
data class User(val id: Int, val name: String, val role: String)

fun processUser(u: User): String {
    return "Hello \${u.name} [\${u.role}] - Welcome to Refyn AI Workspace!"
}

fun main() {
    val user = User(101, "Developer", "Engineer")
    println(processUser(user))
}
`,
    utilsSnippet: `package refyn

fun version(): String = "1.4.0"
`,
  },
  {
    id: 'shell',
    name: 'Shell / Bash',
    ext: 'sh',
    category: 'DevOps',
    Icon: ShellIcon,
    tagline: 'Terminal Scripting',
    color: '#4EAA25',
    codeSnippet: `#!/bin/bash
# Refyn Online Shell Compiler & CLI Tester
USER_NAME="Developer"
USER_ROLE="Engineer"

process_user() {
    echo "Hello $USER_NAME [$USER_ROLE] - Welcome to Refyn AI Workspace!"
}

process_user
`,
    utilsSnippet: `#!/bin/bash
echo "Refyn Shell Utilities Loaded"
`,
  },
  {
    id: 'docker',
    name: 'Dockerfile',
    ext: 'dockerfile',
    category: 'DevOps',
    Icon: DockerIcon,
    tagline: 'Container Isolation',
    color: '#2496ED',
    codeSnippet: `# Refyn Online Dockerfile & Container Analyzer
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
CMD ["npm", "start"]
`,
    utilsSnippet: `# .dockerignore
node_modules
.next
`,
  },
];

function CompilerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Mode: 'grid' (Picture 1) or 'workspace' (Picture 2)
  const [mode, setMode] = useState<'grid' | 'workspace'>('grid');
  
  // Search & Categories for Grid
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Popular' | 'Programming' | 'Web' | 'Databases' | 'DevOps'>('All');

  // Selected Language & Active File in Workspace
  const [selectedLang, setSelectedLang] = useState<LangItem>(LANGUAGES[2]); // Default TypeScript
  const [activeTab, setActiveTab] = useState<'main' | 'utils' | 'readme'>('main');
  
  // Code Map for files
  const [codeMap, setCodeMap] = useState<Record<string, string>>({
    main: LANGUAGES[2].codeSnippet,
    utils: LANGUAGES[2].utilsSnippet,
    readme: `# Refyn Workspace
Multi-language online compiler & AI reviewer powered by Refyn Sol 4.0.
`,
  });

  // Terminal & AI State
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '$ refyn-cli init --lang=typescript',
    '● Switched workspace language to TYPESCRIPT',
    '✓ Ready to compile and review.',
  ]);
  const [cliInput, setCliInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isAiReviewing, setIsAiReviewing] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [qualityScore, setQualityScore] = useState(98);
  const [aiApplied, setAiApplied] = useState(false);

  // Sync state with URL if query params present
  useEffect(() => {
    const langParam = searchParams?.get('lang');
    const viewParam = searchParams?.get('view');
    if (langParam) {
      const found = LANGUAGES.find((l) => l.id.toLowerCase() === langParam.toLowerCase());
      if (found) {
        openWorkspace(found);
      }
    } else if (viewParam === 'workspace') {
      openWorkspace(LANGUAGES[2]);
    }
  }, [searchParams]);

  // Open Workspace for a Language
  const openWorkspace = (lang: LangItem) => {
    setSelectedLang(lang);
    setCodeMap({
      main: lang.codeSnippet,
      utils: lang.utilsSnippet,
      readme: `# Refyn ${lang.name} Workspace\nOnline ${lang.name} Compiler & AI Reviewer powered by Refyn Sol 4.0.\n`,
    });
    setActiveTab('main');
    setTerminalLogs([
      `$ refyn-cli init --lang=${lang.id}`,
      `● Switched workspace language to ${lang.name.toUpperCase()}`,
      `✓ Ready to compile and review.`,
    ]);
    setQualityScore(98);
    setAiApplied(false);
    setMode('workspace');
  };

  // Exit Workspace back to Language Grid
  const handleExitWorkspace = () => {
    setMode('grid');
  };

  // Run Code Logic
  const handleRunCode = () => {
    setIsRunning(true);
    setTerminalLogs((prev) => [...prev, `$ refyn-cli run ${selectedLang.id}.${selectedLang.ext}`]);

    setTimeout(() => {
      setIsRunning(false);
      let outputText = '';
      if (selectedLang.id === 'python') {
        outputText = 'Hello Developer [Engineer] - Welcome to Refyn AI Workspace!\n[Process finished with exit code 0]';
      } else if (selectedLang.id === 'typescript' || selectedLang.id === 'javascript') {
        outputText = 'Hello Developer [Engineer] - Welcome to Refyn AI Workspace!\n[Execution time: 38ms · Memory: 14MB]';
      } else if (selectedLang.id === 'sql') {
        outputText = '+-------------------------------------------------------------------------+\n| greeting                                                                |\n+-------------------------------------------------------------------------+\n| Hello Developer [Engineer] - Welcome to Refyn AI Workspace!             |\n+-------------------------------------------------------------------------+';
      } else {
        outputText = `Hello Developer [Engineer] - Welcome to ${selectedLang.name} on Refyn!\n[Success: 0 errors, 0 warnings]`;
      }
      setTerminalLogs((prev) => [...prev, outputText]);
    }, 550);
  };

  // Trigger AI Review
  const handleAiReview = () => {
    setIsAiReviewing(true);
    setTimeout(() => {
      setIsAiReviewing(false);
      setQualityScore(99);
      setTerminalLogs((prev) => [
        ...prev,
        `⚡ [Refyn AI Sol 4.0]: Audit complete across ${activeTab}.${selectedLang.ext}. 0 critical vulnerabilities found.`,
      ]);
    }, 700);
  };

  // Apply AI Fix
  const handleApplyAiFix = () => {
    setAiApplied(true);
    setQualityScore(100);
    const updatedCode = codeMap.main.replace(
      `// AI Tip: Clean string formatting with zero runtime overhead`,
      `// AI Refactored: Strict return contract & memory optimized (O(1))`
    );
    setCodeMap((prev) => ({ ...prev, main: updatedCode }));
    setTerminalLogs((prev) => [
      ...prev,
      `✓ Applied AI Refactoring to main.${selectedLang.ext}. Code Quality Score: 100/100.`,
    ]);
  };

  // Submit Terminal Input
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    const cmd = cliInput.trim();
    setTerminalLogs((prev) => [...prev, `$ ${cmd}`]);
    setCliInput('');

    if (cmd === 'clear' || cmd === 'cls') {
      setTerminalLogs(['$ refyn-cli ready']);
    } else if (cmd.includes('run')) {
      handleRunCode();
    } else if (cmd.includes('review') || cmd.includes('audit')) {
      handleAiReview();
    } else if (cmd === 'help') {
      setTerminalLogs((prev) => [
        ...prev,
        `Available commands: refyn run, refyn review, clear, help, status`,
      ]);
    } else {
      setTerminalLogs((prev) => [...prev, `Executed command: '${cmd}'`]);
    }
  };

  // Filtered Languages for Grid
  const filteredLangs = LANGUAGES.filter((lang) => {
    const matchesSearch =
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' ? true : lang.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.appContainer}>
      <AnimatePresence mode="wait">
        {mode === 'grid' ? (
          /* ════════════════════════════════════════════════════════════════
             PICTURE 1: LANGUAGE SELECTOR PAGE VIEW
          ════════════════════════════════════════════════════════════════ */
          <motion.div
            key="grid-view"
            className={styles.gridViewPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* ── Top Navigation Bar ── */}
            <header className={styles.navHeader}>
              <div className={styles.navLeft}>
                <Link href="/" className={styles.logoLink} aria-label="Refyn Home">
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

            {/* ── Hero Banner Section ── */}
            <section className={styles.heroSection}>
              {/* Floating Announcement Pill Badge */}
              <div
                className={styles.heroBadge}
                onClick={() => openWorkspace(LANGUAGES[2])}
              >
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

              {/* Search Bar */}
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

              {/* Category Filter Tabs */}
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
                      onClick={() => openWorkspace(lang)}
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
          </motion.div>
        ) : (
          /* ════════════════════════════════════════════════════════════════
             PICTURE 2: FULL-SCREEN AI CODE WORKSPACE PAGE VIEW
          ════════════════════════════════════════════════════════════════ */
          <motion.div
            key="workspace-view"
            className={styles.workspacePage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* ── Top Bar / Header Controls ── */}
            <div className={styles.wsHeader}>
              <div className={styles.wsHeaderLeft}>
                <Link href="/" className={styles.wsLogoLink}>
                  <Logo size="sm" />
                </Link>
                <div className={styles.wsBreadcrumb}>
                  <span className={styles.bcFolder}>refyn-workspace</span>
                  <span className={styles.bcSep}>/</span>
                  <span className={styles.bcFile}>{activeTab}.{activeTab === 'readme' ? 'md' : selectedLang.ext}</span>
                </div>

                {/* Language Dropdown Selector */}
                <div className={styles.langDropdownWrap}>
                  <selectedLang.Icon size={16} />
                  <select
                    className={styles.langSelect}
                    value={selectedLang.id}
                    onChange={(e) => {
                      const found = LANGUAGES.find((l) => l.id === e.target.value);
                      if (found) openWorkspace(found);
                    }}
                  >
                    {LANGUAGES.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className={styles.selectArrow} />
                </div>
              </div>

              <div className={styles.wsHeaderRight}>
                <button className={styles.btnRunCode} onClick={handleRunCode} disabled={isRunning}>
                  <Play size={14} fill="currentColor" />
                  <span>{isRunning ? 'Running…' : 'Run Code'}</span>
                </button>

                <button
                  className={`${styles.btnAiReview} ${isAiReviewing ? styles.pulseBtn : ''}`}
                  onClick={handleAiReview}
                  disabled={isAiReviewing}
                >
                  <Zap size={14} />
                  <span>{isAiReviewing ? 'Auditing…' : 'AI Review'}</span>
                </button>

                <button className={styles.iconControlBtn} title="Settings">
                  <Sliders size={15} />
                </button>

                <button className={styles.btnExit} onClick={handleExitWorkspace} title="Exit Workspace">
                  <X size={16} />
                  <span>Exit</span>
                </button>
              </div>
            </div>

            {/* ── Main Workspace Body ── */}
            <div className={styles.wsBody}>
              {/* 1. Left Icon Dock Bar */}
              <div className={styles.iconDock}>
                <button className={`${styles.dockIcon} ${styles.activeDockIcon}`} title="Explorer">
                  <Folder size={18} />
                </button>
                <button className={styles.dockIcon} title="Search">
                  <Search size={18} />
                </button>
                <button className={styles.dockIcon} title="Source Control">
                  <GitBranch size={18} />
                </button>
                <button className={styles.dockIcon} title="Packages">
                  <Package size={18} />
                </button>
                <button className={styles.dockIcon} title="Terminal">
                  <Terminal size={18} />
                </button>
              </div>

              {/* 2. Left Explorer Drawer Panel */}
              <div className={styles.explorerDrawer}>
                <div className={styles.expHeader}>
                  <span>EXPLORER: REFYN</span>
                  <span className={styles.plusIcon}>+</span>
                </div>

                <div className={styles.expSection}>
                  <div className={styles.secTitle}>
                    <ChevronDown size={14} />
                    <span>SRC WORKSPACE</span>
                  </div>

                  <div className={styles.fileTree}>
                    <div
                      className={`${styles.treeItem} ${activeTab === 'main' ? styles.activeItem : ''}`}
                      onClick={() => setActiveTab('main')}
                    >
                      <FileCode size={14} className={styles.tsColor} />
                      <span>main.{selectedLang.ext}</span>
                    </div>

                    <div
                      className={`${styles.treeItem} ${activeTab === 'utils' ? styles.activeItem : ''}`}
                      onClick={() => setActiveTab('utils')}
                    >
                      <FileCode size={14} className={styles.utilsColor} />
                      <span>utils.{selectedLang.ext}</span>
                    </div>

                    <div
                      className={`${styles.treeItem} ${activeTab === 'readme' ? styles.activeItem : ''}`}
                      onClick={() => setActiveTab('readme')}
                    >
                      <FileText size={14} className={styles.mdColor} />
                      <span>README.md</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Center Code Editor Panel */}
              <div className={styles.editorPanel}>
                {/* Tabs Bar */}
                <div className={styles.editorTabs}>
                  <div
                    className={`${styles.editorTab} ${activeTab === 'main' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('main')}
                  >
                    <FileCode size={14} className={styles.tsColor} />
                    <span>main.{selectedLang.ext}</span>
                  </div>
                  <div
                    className={`${styles.editorTab} ${activeTab === 'utils' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('utils')}
                  >
                    <FileCode size={14} className={styles.utilsColor} />
                    <span>utils.{selectedLang.ext}</span>
                  </div>
                  <div
                    className={`${styles.editorTab} ${activeTab === 'readme' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('readme')}
                  >
                    <FileText size={14} className={styles.mdColor} />
                    <span>README.md</span>
                  </div>
                </div>

                {/* Textarea Code Input Area with Line Numbers */}
                <div className={styles.editorCodeArea}>
                  <div className={styles.lineNumbers}>
                    {codeMap[activeTab].split('\n').map((_, idx) => (
                      <span key={idx}>{idx + 1}</span>
                    ))}
                  </div>
                  <textarea
                    className={styles.codeTextArea}
                    value={codeMap[activeTab]}
                    onChange={(e) => {
                      const val = e.target.value;
                      setCodeMap((prev) => ({ ...prev, [activeTab]: val }));
                    }}
                    spellCheck={false}
                  />
                </div>

                {/* Bottom CLI Terminal Panel */}
                <div className={styles.cliTerminalPanel}>
                  <div className={styles.cliHeader}>
                    <div className={styles.cliTitle}>
                      <Terminal size={14} />
                      <span>CLI TERMINAL — refyn-cli v1.4.0 • Online</span>
                    </div>
                    <button
                      className={styles.clearLogsBtn}
                      onClick={() => setTerminalLogs(['$ refyn-cli ready'])}
                      title="Clear Logs"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>

                  <div className={styles.cliBody}>
                    {terminalLogs.map((log, idx) => (
                      <div key={idx} className={styles.cliLine}>
                        {log}
                      </div>
                    ))}
                  </div>

                  <form className={styles.cliForm} onSubmit={handleTerminalSubmit}>
                    <span className={styles.cliPromptSymbol}>$</span>
                    <input
                      type="text"
                      className={styles.cliInput}
                      placeholder="Type CLI command (e.g., 'refyn run', 'refyn review', 'help')..."
                      value={cliInput}
                      onChange={(e) => setCliInput(e.target.value)}
                    />
                  </form>
                </div>
              </div>

              {/* 4. Right AI Reviewer Panel */}
              <div className={styles.aiPanel}>
                <div className={styles.aiHeader}>
                  <div className={styles.aiTitle}>
                    <Zap size={16} className={styles.tealZap} />
                    <span>Refyn AI Reviewer</span>
                  </div>
                  <span className={styles.solBadge}>Sol 4.0</span>
                </div>

                <div className={styles.aiContent}>
                  {/* Score Card */}
                  <div className={styles.scoreCard}>
                    <div className={styles.scoreTop}>
                      <span className={styles.scoreVal}>{qualityScore} / 100</span>
                      <span className={styles.scoreLbl}>Code Quality Score</span>
                    </div>
                    <div className={styles.scoreBarTrack}>
                      <div
                        className={styles.scoreBarFill}
                        style={{ width: `${qualityScore}%` }}
                      />
                    </div>
                    <div className={styles.scoreStats}>
                      <span>0 Vulnerabilities</span>
                      <span>O(1) Memory</span>
                    </div>
                  </div>

                  {/* AI Audit Findings */}
                  <div className={styles.auditFindingsCard}>
                    <div className={styles.cardSecHeading}>AI Audit Findings</div>
                    <ul className={styles.findingsList}>
                      <li>
                        <CheckCircle2 size={14} className={styles.checkIcon} />
                        <span>Clean Code Contract Verified</span>
                      </li>
                      <li>
                        <span>• Zero syntax errors detected across main.{selectedLang.ext}</span>
                      </li>
                      <li>
                        <span>• Type definitions strictly enforced</span>
                      </li>
                      <li>
                        <span>• Memory complexity: O(1)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Suggested Refactor Card */}
                  <div className={styles.refactorCard}>
                    <div className={styles.cardSecHeading}>Suggested Refactor</div>
                    <p className={styles.refactorDesc}>
                      Refyn AI recommends adding strict type constraints and explicit return guarantees.
                    </p>
                    <button
                      className={`${styles.btnApplyFix} ${aiApplied ? styles.appliedFix : ''}`}
                      onClick={handleApplyAiFix}
                    >
                      <Check size={14} />
                      <span>{aiApplied ? 'AI Fix Applied (100/100)' : 'Apply AI Fix'}</span>
                    </button>
                  </div>
                </div>

                {/* Bottom AI Prompt Bar */}
                <div className={styles.aiChatBar}>
                  <input
                    type="text"
                    className={styles.aiChatInput}
                    placeholder="Ask Refyn AI to refactor, explain or optimize..."
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && aiPrompt.trim()) {
                        setTerminalLogs((prev) => [
                          ...prev,
                          `⚡ [User AI Prompt]: ${aiPrompt}`,
                          `⚡ [Refyn AI Sol 4.0]: Analyzing ${activeTab}.${selectedLang.ext}... All checks optimal!`,
                        ]);
                        setAiPrompt('');
                      }
                    }}
                  />
                  <button
                    className={styles.btnSendAi}
                    onClick={() => {
                      if (aiPrompt.trim()) {
                        setTerminalLogs((prev) => [
                          ...prev,
                          `⚡ [User AI Prompt]: ${aiPrompt}`,
                          `⚡ [Refyn AI Sol 4.0]: Analyzing ${activeTab}.${selectedLang.ext}... All checks optimal!`,
                        ]);
                        setAiPrompt('');
                      }
                    }}
                  >
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CompilerPage() {
  return (
    <Suspense fallback={<div className={styles.appContainer} />}>
      <CompilerContent />
    </Suspense>
  );
}

