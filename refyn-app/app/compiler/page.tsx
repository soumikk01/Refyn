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

function RefynRunLogoIcon({ isRunning }: { isRunning?: boolean }) {
  return (
    <div className={`${styles.runLogoWrap} ${isRunning ? styles.runLogoActive : ''}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.runLogoSvg}
      >
        <circle
          cx="20"
          cy="20"
          r="17"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="28 14"
          fill="none"
          className={styles.runRingCircle}
        />
        <path
          d="M 6 6 L 28 6 L 28 24 L 16 36 L 16 18 L 6 18 Z"
          fill="currentColor"
          className={styles.runChevronLeft}
        />
        <path
          d="M 22 6 L 36 6 L 36 20 L 28 28 L 28 6 Z"
          fill="currentColor"
          opacity="0.8"
          className={styles.runChevronRight}
        />
      </svg>
    </div>
  );
}
function RefynLineLogoCreationAnimation() {
  return (
    <div className={styles.logoCreationWrap}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.logoCreationSvg}
      >
        <defs>
          <linearGradient id="creationTealGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00ffcc" />
            <stop offset="0.5" stopColor="#00c4a7" />
            <stop offset="1" stopColor="#008f7a" />
          </linearGradient>
        </defs>



        <path
          d="M 6 6 L 26 6 L 26 22 L 15 34 L 15 16 L 6 16 Z"
          stroke="url(#creationTealGrad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="rgba(0, 255, 204, 0.15)"
          className={styles.logoDrawPathMain}
        />
        <path
          d="M 20 6 L 34 6 L 34 18 L 26 26 L 26 6 Z"
          stroke="#00ffcc"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="rgba(0, 196, 167, 0.25)"
          className={styles.logoDrawPathSub}
        />
      </svg>
    </div>
  );
}

function highlightVsCodeLine(line: string) {
  if (!line) return <span className={styles.codeLine}>&nbsp;</span>;
  const trimmed = line.trim();

  if (trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('/*')) {
    return <span className={styles.vscComment}>{line}</span>;
  }

  const tokenRegex = /(\/\/.+$|"[\s\S]*?"|'[\s\S]*?'|`[\s\S]*?`|\b(?:using|class|struct|public|private|protected|static|void|string|int|float|double|bool|var|new|return|function|const|let|def|import|from|export|as|type|interface|package|fn|mut|impl|use|namespace|null|undefined|true|false|if|else|for|while|try|catch|finally)\b|\b\d+\b|[A-Z][a-zA-Z0-9_]*|[a-zA-Z_][a-zA-Z0-9_]*|[^\s\w]+|\s+)/g;

  const matches = line.match(tokenRegex) || [line];

  const controlKw = new Set(['return', 'if', 'else', 'for', 'while', 'try', 'catch', 'finally']);
  const typeKw = new Set(['using', 'class', 'struct', 'public', 'private', 'protected', 'static', 'void', 'string', 'int', 'float', 'double', 'bool', 'var', 'new', 'function', 'const', 'let', 'def', 'import', 'from', 'export', 'as', 'type', 'interface', 'package', 'fn', 'mut', 'impl', 'use', 'namespace', 'null', 'undefined', 'true', 'false']);

  return (
    <span className={styles.codeLine}>
      {matches.map((token, i) => {
        if (token.startsWith('//') || token.startsWith('#')) {
          return <span key={i} className={styles.vscComment}>{token}</span>;
        }
        if ((token.startsWith('"') && token.endsWith('"')) || (token.startsWith("'") && token.endsWith("'")) || (token.startsWith('`') && token.endsWith('`'))) {
          return <span key={i} className={styles.vscString}>{token}</span>;
        }
        if (controlKw.has(token)) {
          return <span key={i} className={styles.vscControlKw}>{token}</span>;
        }
        if (typeKw.has(token)) {
          return <span key={i} className={styles.vscKeyword}>{token}</span>;
        }
        if (/^\d+$/.test(token)) {
          return <span key={i} className={styles.vscNumber}>{token}</span>;
        }
        if (/^[A-Z][a-zA-Z0-9_]*$/.test(token)) {
          return <span key={i} className={styles.vscType}>{token}</span>;
        }
        if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
          return <span key={i} className={styles.vscVariable}>{token}</span>;
        }
        if (/^[^\s\w]+$/.test(token)) {
          return <span key={i} className={styles.vscPunctuation}>{token}</span>;
        }
        return <span key={i}>{token}</span>;
      })}
    </span>
  );
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  codeSnippet?: string;
  timestamp: string;
}

interface CodeProblem {
  id: string;
  file: string;
  line: number;
  message: string;
  severity: 'error' | 'warning';
  explanation: string;
  suggestedFix: string;
}

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

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let index = 0;
    const words = text.split(' ');
    setDisplayed('');

    const timer = setInterval(() => {
      index += 2; // Stream 2 words per tick for ultra-fast response
      setDisplayed(words.slice(0, index).join(' '));
      if (index >= words.length) {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayed}</span>;
}

function UserProfileDropdown({ onExit }: { onExit?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.userProfileWrap} ref={dropdownRef}>
      <button
        className={styles.userAvatarBtn}
        onClick={() => setIsOpen((prev) => !prev)}
        title="User Profile & Settings"
      >
        <div className={styles.avatarCircle}>
          <span>AD</span>
          <span className={styles.onlineBadge} />
        </div>
      </button>

      {isOpen && (
        <div className={styles.profileCardModal}>
          <div className={styles.profileCardHeader}>
            <div className={styles.profileAvatarLarge}>
              <span>AD</span>
              <span className={styles.onlineBadgeLarge} />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileName}>Alex Developer</h4>
              <span className={styles.profileEmail}>alex.dev@refyn.ai</span>
              <span className={styles.proPlanBadge}>PRO Plan • Sol 4.0 Active</span>
            </div>
            <button
              className={styles.btnCloseProfile}
              onClick={() => setIsOpen(false)}
              title="Close Profile Card"
            >
              <X size={14} />
            </button>
          </div>

          <div className={styles.profileStatsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNum}>42</span>
              <span className={styles.statLbl}>Repos</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNum}>128</span>
              <span className={styles.statLbl}>AI Reviews</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLbl}>Quality</span>
            </div>
          </div>

          <div className={styles.profileActions}>
            <button className={styles.profileActionBtn}>
              <Sliders size={14} />
              <span>Workspace Preferences</span>
            </button>
            <button className={styles.profileActionBtn}>
              <ShieldCheck size={14} />
              <span>API Key & Billing</span>
            </button>
            <button
              className={styles.profileExitBtn}
              onClick={() => {
                setIsOpen(false);
                if (onExit) onExit();
              }}
            >
              <RotateCcw size={14} />
              <span>Exit Workspace / Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CompilerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Mode: 'grid' (Picture 1) or 'workspace' (Picture 2)
  const [mode, setMode] = useState<'grid' | 'workspace'>('grid');
  
  // Search & Categories for Grid
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Popular' | 'Programming' | 'Web' | 'Databases' | 'DevOps'>('All');

  // Selected Language in Workspace
  const [selectedLang, setSelectedLang] = useState<LangItem>(LANGUAGES[2]); // Default TypeScript
  const [currentCode, setCurrentCode] = useState<string>(LANGUAGES[2].codeSnippet);

  // Terminal & AI State
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '$ refyn-cli init --lang=typescript',
    '● Switched workspace language to TYPESCRIPT',
    '✓ Ready to compile and review.',
  ]);
  const [cliInput, setCliInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([
    'refyn-cli init --lang=javascript',
    'git clone https://github.com/vercel/next.js',
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [terminalTab, setTerminalTab] = useState<'problems' | 'output' | 'debug' | 'terminal' | 'ports' | 'gitlens'>('terminal');
  const [terminalSessions, setTerminalSessions] = useState<{ id: string; name: string }[]>([
    { id: '1', name: 'node...' },
    { id: '2', name: 'power...' },
    { id: '3', name: 'refyn-cli' },
  ]);
  const [activeSessionId, setActiveSessionId] = useState('3');
  const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isAiReviewing, setIsAiReviewing] = useState(false);
  const [isSendingAiPrompt, setIsSendingAiPrompt] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [qualityScore, setQualityScore] = useState<number | null>(98);
  const [lastCodeOutput, setLastCodeOutput] = useState<string>(
    'Hello Developer [Engineer] - Welcome to Refyn AI Workspace!'
  );
  const [aiExplanation, setAiExplanation] = useState<string>(
    'Defines user model with ID 101, name "Developer", role "Engineer". Formats string greeting using processUser() with zero overhead.'
  );
  const [aiFindings, setAiFindings] = useState<string[]>([
    'Clean Code Contract Verified',
    'Zero syntax errors detected across workspace',
    'Type definitions strictly enforced',
    'Memory complexity: O(1)',
  ]);
  const [aiSuggestion, setAiSuggestion] = useState(
    'Refyn AI Sol 4.0 recommends strict return contracts and O(1) memory optimization.'
  );
  const [aiApplied, setAiApplied] = useState(false);
  const [refactoredCode, setRefactoredCode] = useState(
    `// AI Optimized Version\n` + LANGUAGES[2].codeSnippet
  );
  // Resizable Left Explorer Drawer State
  const [drawerWidth, setDrawerWidth] = useState<number>(220);
  const [isResizingDrawer, setIsResizingDrawer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizingDrawer) return;
      const newWidth = e.clientX - 48; // Subtract dock width (48px)
      if (newWidth >= 160 && newWidth <= 500) {
        setDrawerWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizingDrawer(false);
    };

    if (isResizingDrawer) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizingDrawer]);

  // Resizable AI Panel State
  const [aiPanelWidth, setAiPanelWidth] = useState<number>(360);
  const [isResizingAiPanel, setIsResizingAiPanel] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizingAiPanel) return;
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= 260 && newWidth <= 650) {
        setAiPanelWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizingAiPanel(false);
    };

    if (isResizingAiPanel) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizingAiPanel]);
  const [aiViewMode, setAiViewMode] = useState<'audit' | 'chat'>('chat');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: 'Hello! I am Fyn AI Sol 4.0. Ask me anything about your code, or ask me to write/refactor functions for your workspace.',
      timestamp: 'Just now',
    },
  ]);
  const [codeProblems, setCodeProblems] = useState<CodeProblem[]>([
    {
      id: 'p1',
      file: `main.${LANGUAGES[2].ext}`,
      line: 12,
      message: 'TypeError: Cannot read property "role" of undefined',
      severity: 'error',
      explanation: 'Parameter "u" in processUser(u) may be undefined if passed without initial guard.',
      suggestedFix: `// Fixed with default parameter & optional chaining\nfunction processUser(u = { name: "Developer", role: "Engineer" }) {\n  return \`Hello \${u?.name || "Dev"} [\${u?.role || "User"}] - Welcome to Refyn AI Workspace!\`;\n}`,
    },
  ]);

  // Sidebar Dock & Workspace File State
  const [activeDock, setActiveDock] = useState<'explorer' | 'search' | 'github' | 'packages'>('explorer');
  const [showTerminal, setShowTerminal] = useState(true);
  const [githubUrl, setGithubUrl] = useState('');
  const [isCloningGithub, setIsCloningGithub] = useState(false);
  const [workspaceSearchQuery, setWorkspaceSearchQuery] = useState('');
  const [workspaceFiles, setWorkspaceFiles] = useState<{ name: string; content: string; ext: string }[]>([
    { name: `main.${LANGUAGES[2].ext}`, content: LANGUAGES[2].codeSnippet, ext: LANGUAGES[2].ext },
    { name: `utils.${LANGUAGES[2].ext}`, content: LANGUAGES[2].utilsSnippet, ext: LANGUAGES[2].ext },
    { name: `README.md`, content: `# Refyn Workspace\nAI-powered compiler environment.`, ext: `md` },
  ]);
  const [activeFileName, setActiveFileName] = useState(`main.${LANGUAGES[2].ext}`);

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
    setCurrentCode(lang.codeSnippet);
    setWorkspaceFiles([
      { name: `main.${lang.ext}`, content: lang.codeSnippet, ext: lang.ext },
      { name: `utils.${lang.ext}`, content: lang.utilsSnippet, ext: lang.ext },
      { name: `README.md`, content: `# Refyn ${lang.name} Workspace\nAI-powered compiler & code analyzer.`, ext: 'md' },
    ]);
    setActiveFileName(`main.${lang.ext}`);
    setTerminalLogs([
      `$ refyn-cli init --lang=${lang.id}`,
      `● Switched workspace language to ${lang.name.toUpperCase()}`,
      `✓ Ready to compile and review.`,
    ]);
    setQualityScore(98);
    setLastCodeOutput(`Hello Developer [Engineer] - Welcome to ${lang.name} on Refyn!`);
    setAiExplanation(`Executes main logic for ${lang.name}. Evaluates user structure, formats output with zero runtime overhead, and guarantees O(1) memory complexity.`);
    setAiFindings([
      `Clean Code Contract Verified for ${lang.name}`,
      `Zero syntax errors detected across main.${lang.ext}`,
      `Type definitions strictly enforced`,
      `Memory complexity: O(1)`,
    ]);
    setAiSuggestion(
      `Refyn AI Sol 4.0 recommends strict type constraints and explicit return guarantees for ${lang.name}.`
    );
    setRefactoredCode(`// Refyn AI Refactored — ${lang.name}\n${lang.codeSnippet}`);
    setAiApplied(false);
    setMode('workspace');
  };

  // ── Clone GitHub Repository & Ingest for AI Analysis ────────────────────────
  const handleCloneGithub = async (targetUrl?: string) => {
    const url = targetUrl || githubUrl;
    if (!url.trim()) return;

    setIsCloningGithub(true);
    setTerminalLogs((prev) => [
      ...prev,
      `$ git clone ${url}`,
      `● Ingesting repository files for Refyn AI Analysis...`,
    ]);

    try {
      const res = await fetch('/api/clone-github', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoUrl: url }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setTerminalLogs((prev) => [
          ...prev,
          `✗ GitHub clone error: ${data.error ?? 'Failed to clone repository'}`,
        ]);
        return;
      }

      if (data.files && data.files.length > 0) {
        setWorkspaceFiles(data.files);
        const firstFile = data.files[0];
        setActiveFileName(firstFile.name);
        setCurrentCode(firstFile.content);

        setTerminalLogs((prev) => [
          ...prev,
          `✓ Successfully cloned ${data.repoName} (${data.files.length} files imported)`,
          `⚡ [Refyn AI]: Ingesting ${firstFile.name} for instant AI audit...`,
        ]);

        // Automatically trigger AI review on cloned repo code!
        handleAiReview();
      }
    } catch (err: any) {
      setTerminalLogs((prev) => [...prev, `✗ Clone network error: ${err.message}`]);
    } finally {
      setIsCloningGithub(false);
    }
  };

  // Exit Workspace back to Language Grid
  const handleExitWorkspace = () => {
    setMode('grid');
  };

  // ── Real Code Execution via Piston API & AI Review ───────────────────────────
  const handleRunCode = async () => {
    setIsRunning(true);
    setShowTerminal(true);
    setTerminalTab('output');
    setTerminalLogs((prev) => [...prev, `$ refyn-cli run main.${selectedLang.ext}`]);

    // Simultaneously trigger AI explanation & review for the right panel
    handleAiReview();

    try {
      const res = await fetch('/api/run-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: currentCode, langId: selectedLang.id }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setTerminalLogs((prev) => [
          ...prev,
          `✗ Execution error: ${data.error ?? 'Unknown error'}`,
        ]);
        return;
      }

      const lines: string[] = [];
      if (data.compileOutput) lines.push(data.compileOutput.trim());
      if (data.stderr)        lines.push(`⚠ STDERR:\n${data.stderr.trim()}`);
      if (data.output)        {
        lines.push(data.output.trim());
        setLastCodeOutput(data.output.trim());
      }
      lines.push(
        data.exitCode === 0
          ? `✓ [Process exited with code 0]`
          : `✗ [Process exited with code ${data.exitCode}]`
      );

      setTerminalLogs((prev) => [...prev, ...lines]);
    } catch (err: any) {
      setTerminalLogs((prev) => [...prev, `✗ Network error: ${err.message}`]);
    } finally {
      setIsRunning(false);
    }
  };

  // ── Real AI Code Review via Gemini ───────────────────────────────────────────
  const handleAiReview = async () => {
    setIsAiReviewing(true);
    setTerminalLogs((prev) => [
      ...prev,
      `⚡ [Refyn AI Sol 4.0]: Auditing main.${selectedLang.ext}...`,
    ]);

    try {
      const res = await fetch('/api/ai-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: currentCode,
          language: selectedLang.name,
          mode: 'review',
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setTerminalLogs((prev) => [
          ...prev,
          `✗ AI Review error: ${data.error ?? 'Unknown error'}`,
        ]);
        return;
      }

      const result = data.result;
      if (result?.score !== undefined) {
        setQualityScore(result.score);
        setAiFindings(result.findings ?? []);
        setAiSuggestion(result.suggestion ?? '');
        if (result.explanation) setAiExplanation(result.explanation);
        if (result.refactoredCode) setRefactoredCode(result.refactoredCode);
        setTerminalLogs((prev) => [
          ...prev,
          `✓ [Refyn AI Sol 4.0]: Score ${result.score}/100 · ${result.vulnerabilities ?? 0} vulnerabilities · ${result.memoryComplexity ?? 'O(1)'}`,
        ]);
      } else {
        // Raw text fallback
        setTerminalLogs((prev) => [...prev, `⚡ [Refyn AI Sol 4.0]: ${result.raw ?? 'Review complete.'}`.slice(0, 200)]);
      }
    } catch (err: any) {
      setTerminalLogs((prev) => [...prev, `✗ Network error: ${err.message}`]);
    } finally {
      setIsAiReviewing(false);
    }
  };

  // ── Apply AI Fix ─────────────────────────────────────────────────────────────
  const handleApplyAiFix = () => {
    setAiApplied(true);
    if (refactoredCode) {
      setCurrentCode(refactoredCode);
      setQualityScore((prev) => Math.min(100, (prev ?? 98) + 2));
    }
    setTerminalLogs((prev) => [
      ...prev,
      `✓ Applied AI Refactoring to main.${selectedLang.ext}. Code Quality Score: ${Math.min(100, (qualityScore ?? 98) + 2)}/100.`,
    ]);
  };

  // ── AI Chat Handler with Streaming Chat History & Code Generation ───────────
  const handleAiChat = async (msg: string) => {
    if (!msg.trim()) return;

    setAiViewMode('chat');
    const userMsgText = msg.trim();
    setAiPrompt('');

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setIsSendingAiPrompt(true);

    try {
      const res = await fetch('/api/ai-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: currentCode,
          language: selectedLang.name,
          prompt: userMsgText,
          mode: 'chat',
        }),
      });

      const data = await res.json();
      const replyText = String(data.result ?? data.error ?? 'Refyn AI processed your request.');

      let generatedCode = '';
      if (replyText.includes('```')) {
        const parts = replyText.split('```');
        generatedCode = parts[1]?.replace(/^[a-zA-Z]+\n/, '').trim() || '';
      } else if (
        userMsgText.toLowerCase().includes('write') ||
        userMsgText.toLowerCase().includes('create') ||
        userMsgText.toLowerCase().includes('code') ||
        userMsgText.toLowerCase().includes('fix')
      ) {
        generatedCode = `// Refyn AI Sol 4.0 Generated Function\nexport function validateAndFormat(data) {\n  if (!data) return { status: "error", message: "Invalid payload" };\n  return {\n    id: data.id || Date.now(),\n    formatted: \`[Refyn AI]: \${data.name || "User"}\`,\n    timestamp: new Date().toISOString(),\n  };\n}`;
      }

      const aiMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: replyText.replace(/```[\s\S]*?```/g, '').trim() || replyText,
        codeSnippet: generatedCode || undefined,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChatMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: `⚡ [Refyn AI Sol 4.0]: Code structure across main.${selectedLang.ext} analyzed. Time complexity is O(1) and zero syntax hazards detected.`,
          timestamp: 'Just now',
        },
      ]);
    } finally {
      setIsSendingAiPrompt(false);
    }
  };

  // ── Explain & Fix Error from Problems Section ────────────────────────────────
  const handleExplainProblem = (prob: CodeProblem) => {
    setAiViewMode('chat');
    const aiMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'ai',
      text: `🚨 [Error Analysis — Line ${prob.line}]: ${prob.message}\n\nExplanation: ${prob.explanation}`,
      codeSnippet: prob.suggestedFix,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, aiMsg]);
  };
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    const cmd = cliInput.trim();

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

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
        `Available commands: refyn run, refyn review, clear, help, status, node, git`,
      ]);
    } else {
      setTerminalLogs((prev) => [...prev, `Executed command: '${cmd}'`]);
    }
  };

  // ── Arrow Up / Down Command History Navigation ────────────────────────────────
  const handleCliKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryIndex(nextIdx);
        setCliInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const prevIdx = historyIndex - 1;
      if (prevIdx >= 0) {
        setHistoryIndex(prevIdx);
        setCliInput(commandHistory[commandHistory.length - 1 - prevIdx]);
      } else {
        setHistoryIndex(-1);
        setCliInput('');
      }
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

                {/* User Profile Avatar & Card Dropdown */}
                <UserProfileDropdown onExit={() => router.push('/')} />
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
                  <span className={styles.bcFile}>main.{selectedLang.ext}</span>
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
                  <RefynRunLogoIcon isRunning={isRunning} />
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

                {/* User Profile Avatar Dropdown in Workspace */}
                <UserProfileDropdown onExit={handleExitWorkspace} />
              </div>
            </div>

            {/* ── Main Workspace Body ── */}
            <div className={styles.wsBody}>
              {/* 1. Left Icon Dock Bar */}
              <div className={styles.iconDock}>
                <button
                  className={`${styles.dockIcon} ${activeDock === 'explorer' ? styles.activeDockIcon : ''}`}
                  onClick={() => setActiveDock('explorer')}
                  title="Explorer (Files)"
                >
                  <Folder size={18} />
                </button>
                <button
                  className={`${styles.dockIcon} ${activeDock === 'search' ? styles.activeDockIcon : ''}`}
                  onClick={() => setActiveDock('search')}
                  title="Search Workspace"
                >
                  <Search size={18} />
                </button>
                <button
                  className={`${styles.dockIcon} ${activeDock === 'github' ? styles.activeDockIcon : ''}`}
                  onClick={() => setActiveDock('github')}
                  title="GitHub Clone & Source Control"
                >
                  <GitBranch size={18} />
                </button>
                <button
                  className={`${styles.dockIcon} ${activeDock === 'packages' ? styles.activeDockIcon : ''}`}
                  onClick={() => setActiveDock('packages')}
                  title="Packages & Dependencies"
                >
                  <Package size={18} />
                </button>
                <button
                  className={`${styles.dockIcon} ${showTerminal ? styles.activeDockIcon : ''}`}
                  onClick={() => setShowTerminal((prev) => !prev)}
                  title="Toggle CLI Terminal"
                >
                  <Terminal size={18} />
                </button>
              </div>

              {/* 2. Left Active Drawer Panel (Resizable via Draggable Mouse Cursor) */}
              <div
                className={styles.explorerDrawer}
                style={{ width: `${drawerWidth}px` }}
              >
                {/* Right Draggable Resizer Border Handle */}
                <div
                  className={styles.drawerResizeHandle}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setIsResizingDrawer(true);
                  }}
                  title="Drag mouse left/right to resize Explorer drawer"
                />

                {activeDock === 'explorer' && (
                  <>
                    <div className={styles.expHeader}>
                      <span>EXPLORER: REFYN</span>
                      <div className={styles.sizePresets}>
                        <button
                          className={styles.presetBtn}
                          onClick={() => setDrawerWidth(180)}
                          title="Compact (180px)"
                        >
                          S
                        </button>
                        <button
                          className={styles.presetBtn}
                          onClick={() => setDrawerWidth(240)}
                          title="Standard (240px)"
                        >
                          M
                        </button>
                        <button
                          className={styles.presetBtn}
                          onClick={() => setDrawerWidth(320)}
                          title="Wide (320px)"
                        >
                          L
                        </button>
                        <span className={styles.plusIcon} title="Add File">+</span>
                      </div>
                    </div>

                    <div className={styles.expSection}>
                      <div className={styles.secTitle}>
                        <ChevronDown size={14} />
                        <span>SRC WORKSPACE</span>
                      </div>

                      <div className={styles.fileTree}>
                        {workspaceFiles.map((file) => (
                          <div
                            key={file.name}
                            className={`${styles.treeItem} ${activeFileName === file.name ? styles.activeItem : ''}`}
                            onClick={() => {
                              setActiveFileName(file.name);
                              setCurrentCode(file.content);
                            }}
                          >
                            <FileCode size={14} className={styles.tsColor} />
                            <span>{file.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeDock === 'search' && (
                  <>
                    <div className={styles.expHeader}>
                      <span>SEARCH WORKSPACE</span>
                    </div>
                    <div className={styles.drawerContent}>
                      <div className={styles.drawerInputWrap}>
                        <label className={styles.drawerInputLabel}>Search in files</label>
                        <input
                          type="text"
                          className={styles.drawerInput}
                          placeholder="Type search query..."
                          value={workspaceSearchQuery}
                          onChange={(e) => setWorkspaceSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className={styles.quickReposTitle}>Matching Results</div>
                      {workspaceFiles
                        .filter((f) =>
                          !workspaceSearchQuery ||
                          f.name.toLowerCase().includes(workspaceSearchQuery.toLowerCase()) ||
                          f.content.toLowerCase().includes(workspaceSearchQuery.toLowerCase())
                        )
                        .map((f) => (
                          <div
                            key={f.name}
                            className={styles.quickRepoPill}
                            onClick={() => {
                              setActiveFileName(f.name);
                              setCurrentCode(f.content);
                            }}
                          >
                            <span>{f.name}</span>
                            <span className={styles.packageVer}>match</span>
                          </div>
                        ))}
                    </div>
                  </>
                )}

                {activeDock === 'github' && (
                  <>
                    <div className={styles.expHeader}>
                      <span>GITHUB CLONE & AI AUDIT</span>
                    </div>
                    <div className={styles.drawerContent}>
                      <div className={styles.drawerInputWrap}>
                        <label className={styles.drawerInputLabel}>GitHub Repo URL</label>
                        <input
                          type="text"
                          className={styles.drawerInput}
                          placeholder="https://github.com/owner/repo"
                          value={githubUrl}
                          onChange={(e) => setGithubUrl(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCloneGithub();
                          }}
                        />
                      </div>

                      <button
                        className={styles.btnCloneGithub}
                        onClick={() => handleCloneGithub()}
                        disabled={isCloningGithub || !githubUrl.trim()}
                      >
                        <GitBranch size={14} />
                        <span>{isCloningGithub ? 'Cloning & Ingesting…' : 'Clone & Analyze with AI'}</span>
                      </button>

                      <div className={styles.quickReposTitle}>Popular Repositories</div>
                      {[
                        'vercel/next.js',
                        'facebook/react',
                        'python/cpython',
                        'torvalds/linux',
                        'refyn/ai-core',
                      ].map((repo) => (
                        <div
                          key={repo}
                          className={styles.quickRepoPill}
                          onClick={() => {
                            setGithubUrl(`https://github.com/${repo}`);
                            handleCloneGithub(`https://github.com/${repo}`);
                          }}
                        >
                          <span>{repo}</span>
                          <span>↓ Clone</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeDock === 'packages' && (
                  <>
                    <div className={styles.expHeader}>
                      <span>PACKAGE MANAGER</span>
                    </div>
                    <div className={styles.drawerContent}>
                      <div className={styles.drawerInputWrap}>
                        <label className={styles.drawerInputLabel}>Install npm package</label>
                        <input
                          type="text"
                          className={styles.drawerInput}
                          placeholder="npm install <package>"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              const val = e.currentTarget.value;
                              if (val.trim()) {
                                setTerminalLogs((prev) => [...prev, `$ npm install ${val.trim()}`, `+ ${val.trim()}@latest added in 120ms`]);
                                e.currentTarget.value = '';
                              }
                            }
                          }}
                        />
                      </div>
                      <div className={styles.quickReposTitle}>Active Dependencies</div>
                      {[
                        { name: 'framer-motion', ver: 'v12.4' },
                        { name: 'lucide-react', ver: 'v1.27' },
                        { name: 'next', ver: 'v16.2' },
                        { name: 'react', ver: 'v19.2' },
                        { name: 'sass', ver: 'v1.102' },
                      ].map((pkg) => (
                        <div key={pkg.name} className={styles.packageItem}>
                          <span>{pkg.name}</span>
                          <span className={styles.packageVer}>{pkg.ver}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* 3. Center Code Editor Panel */}
              <div className={styles.editorPanel}>
                {/* Tabs Bar */}
                <div className={styles.editorTabs}>
                  {workspaceFiles.map((file) => (
                    <div
                      key={file.name}
                      className={`${styles.editorTab} ${activeFileName === file.name ? styles.activeTab : ''}`}
                      onClick={() => {
                        setActiveFileName(file.name);
                        setCurrentCode(file.content);
                      }}
                    >
                      <FileCode size={14} className={styles.tsColor} />
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>

                {/* Textarea Code Input Area with Line Numbers & VS Code Syntax Highlighting */}
                <div className={styles.editorCodeArea}>
                  <div className={styles.lineNumbers}>
                    {currentCode.split('\n').map((_, idx) => (
                      <span key={idx}>{idx + 1}</span>
                    ))}
                  </div>

                  <div className={styles.editorViewWrap}>
                    <pre className={styles.highlightPre} aria-hidden="true">
                      {currentCode.split('\n').map((line, idx) => (
                        <React.Fragment key={idx}>
                          {highlightVsCodeLine(line)}
                          {'\n'}
                        </React.Fragment>
                      ))}
                    </pre>

                    <textarea
                      className={styles.codeTextArea}
                      value={currentCode}
                      onChange={(e) => setCurrentCode(e.target.value)}
                      onScroll={(e) => {
                        const target = e.currentTarget;
                        const pre = target.previousElementSibling as HTMLPreElement | null;
                        if (pre) {
                          pre.scrollTop = target.scrollTop;
                          pre.scrollLeft = target.scrollLeft;
                        }
                      }}
                      spellCheck={false}
                    />
                  </div>
                </div>

                {/* Bottom CLI Terminal Panel (Side-by-side & VS Code Tabs Matching Picture 2) */}
                {showTerminal && (
                  <div className={`${styles.cliTerminalPanel} ${isTerminalMaximized ? styles.cliMaximized : ''}`}>
                    {/* VS Code Header Tabs */}
                    <div className={styles.cliHeader}>
                      <div className={styles.cliHeaderLeftTabs}>
                        <button
                          className={`${styles.cliTabBtn} ${terminalTab === 'problems' ? styles.cliTabActive : ''}`}
                          onClick={() => setTerminalTab('problems')}
                        >
                          Problems <span>(0)</span>
                        </button>
                        <button
                          className={`${styles.cliTabBtn} ${terminalTab === 'output' ? styles.cliTabActive : ''}`}
                          onClick={() => setTerminalTab('output')}
                        >
                          Output
                        </button>
                        <button
                          className={`${styles.cliTabBtn} ${terminalTab === 'debug' ? styles.cliTabActive : ''}`}
                          onClick={() => setTerminalTab('debug')}
                        >
                          Debug Console
                        </button>
                        <button
                          className={`${styles.cliTabBtn} ${terminalTab === 'terminal' ? styles.cliTabActive : ''}`}
                          onClick={() => setTerminalTab('terminal')}
                        >
                          Terminal
                        </button>
                        <button
                          className={`${styles.cliTabBtn} ${terminalTab === 'ports' ? styles.cliTabActive : ''}`}
                          onClick={() => setTerminalTab('ports')}
                        >
                          Ports
                        </button>
                        <button
                          className={`${styles.cliTabBtn} ${terminalTab === 'gitlens' ? styles.cliTabActive : ''}`}
                          onClick={() => setTerminalTab('gitlens')}
                        >
                          GitLens
                        </button>
                      </div>

                      {/* Header Right Action Controls */}
                      <div className={styles.cliHeaderRightControls}>
                        <button
                          className={styles.cliControlBtn}
                          title="New Terminal Instance"
                          onClick={() => {
                            const newId = String(terminalSessions.length + 1);
                            const newSession = { id: newId, name: `bash ${newId}...` };
                            setTerminalSessions((prev) => [...prev, newSession]);
                            setActiveSessionId(newId);
                            setTerminalLogs((prev) => [...prev, `$ initialized bash session #${newId}`]);
                          }}
                        >
                          +
                        </button>
                        <button
                          className={styles.cliControlBtn}
                          title="Clear Terminal Logs"
                          onClick={() => setTerminalLogs(['$ refyn-cli ready'])}
                        >
                          <RotateCcw size={12} />
                        </button>
                        <button
                          className={styles.cliControlBtn}
                          title={isTerminalMaximized ? 'Restore Panel' : 'Maximize Panel'}
                          onClick={() => setIsTerminalMaximized((prev) => !prev)}
                        >
                          {isTerminalMaximized ? '🗗' : '🗖'}
                        </button>
                        <button
                          className={styles.cliControlBtn}
                          title="Close Terminal"
                          onClick={() => setShowTerminal(false)}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Side-by-Side Main Terminal Layout */}
                    <div className={styles.cliMainLayout}>
                      {/* Left: Command Console Logs & Input */}
                      <div className={styles.cliLeftConsole}>
                        <div className={styles.cliBody}>
                          {terminalTab === 'output' ? (
                            <>
                              <div className={styles.cliLine} style={{ color: '#00ffcc', fontWeight: 600 }}>
                                [Code Execution Output — main.{selectedLang.ext}]
                              </div>
                              <div className={styles.cliLine} style={{ color: '#38bdf8', paddingLeft: '8px' }}>
                                {lastCodeOutput || 'Click "Run Code" to execute code and view output'}
                              </div>
                              {terminalLogs.filter(l => l.includes('Process exited') || l.includes('STDERR') || l.includes('✓')).map((log, idx) => (
                                <div key={idx} className={styles.cliLine}>
                                  {log}
                                </div>
                              ))}
                            </>
                          ) : terminalTab === 'problems' ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {codeProblems.map((prob) => (
                                <div
                                  key={prob.id}
                                  style={{
                                    background: 'rgba(239, 68, 68, 0.08)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: '6px',
                                    padding: '8px 12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  }}
                                >
                                  <div>
                                    <div style={{ color: '#f87171', fontWeight: 600, fontSize: '12px' }}>
                                      {`🚫 [${prob.file}: L${prob.line}] ${prob.message}`}
                                    </div>
                                    <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '2px' }}>
                                      {prob.explanation}
                                    </div>
                                  </div>

                                  <button
                                    className={styles.btnExplainError}
                                    onClick={() => handleExplainProblem(prob)}
                                  >
                                    <Zap size={12} />
                                    <span>⚡ Explain with AI</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          ) : terminalTab === 'ports' ? (
                            <>
                              <div className={styles.cliLine} style={{ color: '#00ffcc' }}>
                                Local: http://localhost:3000
                              </div>
                              <div className={styles.cliLine} style={{ color: '#94a3b8' }}>
                                Network: http://192.168.31.18:3000
                              </div>
                            </>
                          ) : (
                            terminalLogs.map((log, idx) => (
                              <div key={idx} className={styles.cliLine}>
                                {log}
                              </div>
                            ))
                          )}
                        </div>

                        <form className={styles.cliForm} onSubmit={handleTerminalSubmit}>
                          <span className={styles.cliPromptSymbol}>$</span>
                          <input
                            type="text"
                            className={styles.cliInput}
                            placeholder="Type CLI command (Use ↑/↓ for command history)..."
                            value={cliInput}
                            onChange={(e) => setCliInput(e.target.value)}
                            onKeyDown={handleCliKeyDown}
                          />
                        </form>
                      </div>

                      {/* Right: Side-by-Side Active Terminal Sessions Panel (Matching Picture 2) */}
                      <div className={styles.cliRightSessions}>
                        {terminalSessions.map((session) => (
                          <div
                            key={session.id}
                            className={`${styles.sessionItem} ${activeSessionId === session.id ? styles.activeSession : ''}`}
                            onClick={() => setActiveSessionId(session.id)}
                          >
                            <div className={styles.sessionName}>
                              <Terminal size={12} />
                              <span>{session.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Right AI Reviewer Panel (Resizable via Draggable Mouse Cursor) */}
              <div
                className={`${styles.aiPanel} ${isResizingAiPanel ? styles.isResizing : ''}`}
                style={{ width: `${aiPanelWidth}px` }}
              >
                {/* Left Draggable Resizer Border Handle */}
                <div
                  className={styles.aiResizeHandle}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setIsResizingAiPanel(true);
                  }}
                  title="Drag mouse left/right to resize AI panel"
                />

                <div className={styles.aiHeader}>
                  <div className={styles.aiTitle}>
                    <Logo size="sm" showText={false} />
                    <span className={styles.logoTitleText}>fyn ai</span>
                  </div>

                  <div className={styles.sizePresets}>
                    <button
                      className={styles.presetBtn}
                      onClick={() => setAiPanelWidth(280)}
                      title="Compact Width (280px)"
                    >
                      S
                    </button>
                    <button
                      className={styles.presetBtn}
                      onClick={() => setAiPanelWidth(380)}
                      title="Standard Width (380px)"
                    >
                      M
                    </button>
                    <button
                      className={styles.presetBtn}
                      onClick={() => setAiPanelWidth(480)}
                      title="Wide Width (480px)"
                    >
                      L
                    </button>
                    <span className={styles.solBadge}>Sol 4.0</span>
                  </div>
                </div>

                {/* AI Mode Sub-Header Tabs */}
                <div className={styles.aiModeSubHeader}>
                  <button
                    className={`${styles.aiViewTabBtn} ${aiViewMode === 'chat' ? styles.aiViewTabActive : ''}`}
                    onClick={() => setAiViewMode('chat')}
                  >
                    💬 AI Chat (Live)
                  </button>
                  <button
                    className={`${styles.aiViewTabBtn} ${aiViewMode === 'audit' ? styles.aiViewTabActive : ''}`}
                    onClick={() => setAiViewMode('audit')}
                  >
                    📊 Audit Overview
                  </button>
                </div>

                <div className={styles.aiContent}>
                  {aiViewMode === 'chat' ? (
                    <div className={styles.chatList}>
                      {chatMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`${styles.chatBubble} ${msg.sender === 'user' ? styles.userBubble : styles.aiBubble}`}
                        >
                          <div className={styles.bubbleMeta}>
                            {msg.sender === 'user' ? (
                              <span>You • {msg.timestamp}</span>
                            ) : (
                              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <Logo size="sm" showText={false} />
                                <span>Fyn AI Sol 4.0 • {msg.timestamp}</span>
                              </span>
                            )}
                          </div>

                          <div className={styles.bubbleText}>
                            {msg.sender === 'ai' ? <TypewriterText text={msg.text} /> : msg.text}
                          </div>

                          {msg.codeSnippet && (
                            <div className={styles.codeInsertCard}>
                              <div className={styles.codeInsertSnippet}>
                                {msg.codeSnippet}
                              </div>
                              <button
                                className={styles.btnInsertCode}
                                onClick={() => {
                                  setCurrentCode((prev) => prev + '\n\n' + msg.codeSnippet);
                                  setCodeProblems([]); // Clear problem on fix application!
                                  setTerminalLogs((prev) => [
                                    ...prev,
                                    `✓ Inserted AI generated code into main.${selectedLang.ext}`,
                                  ]);
                                }}
                              >
                                <Check size={12} />
                                <span>Insert into main.{selectedLang.ext}</span>
                              </button>
                            </div>
                          )}
                        </div>
                      ))}

                      {isSendingAiPrompt && (
                        <div className={styles.thinkingBubble}>
                          <RefynLineLogoCreationAnimation />
                          <span className={styles.thinkingText}>
                            Thinking
                            <span className={styles.thinkingDots}>
                              <span>.</span><span>.</span><span>.</span>
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      {/* Score Card */}
                      <div className={styles.scoreCard}>
                        <div className={styles.scoreTop}>
                          <span className={styles.scoreVal}>
                            {qualityScore !== null ? `${qualityScore} / 100` : '— / 100'}
                          </span>
                          <span className={styles.scoreLbl}>Code Quality Score</span>
                        </div>
                        <div className={styles.scoreBarTrack}>
                          <div
                            className={styles.scoreBarFill}
                            style={{ width: `${qualityScore ?? 0}%` }}
                          />
                        </div>
                        <div className={styles.scoreStats}>
                          <span>0 Vulnerabilities</span>
                          <span>O(1) Memory</span>
                        </div>
                      </div>

                      {/* Code Output Card */}
                      <div className={styles.codeOutputCard}>
                        <div className={styles.outputHeader}>
                          <Terminal size={13} />
                          <span>Code Execution Output</span>
                        </div>
                        <div className={styles.outputContent}>
                          {lastCodeOutput || 'Click "Run Code" to view output'}
                        </div>
                      </div>

                      {/* AI Explanation Card */}
                      <div className={styles.aiExplanationCard}>
                        <div className={styles.cardSecHeading}>🧠 AI Code Explanation</div>
                        <p className={styles.explanationText}>
                          {aiExplanation}
                        </p>
                      </div>

                      {/* AI Audit Findings */}
                      <div className={styles.auditFindingsCard}>
                        <div className={styles.cardSecHeading}>AI Audit Findings</div>
                        {aiFindings.length > 0 ? (
                          <ul className={styles.findingsList}>
                            {aiFindings.map((finding, i) => (
                              <li key={i}>
                                <CheckCircle2 size={14} className={styles.checkIcon} />
                                <span>{finding}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul className={styles.findingsList}>
                            <li><span>Run AI Review to see findings</span></li>
                          </ul>
                        )}
                      </div>

                      {/* Suggested Refactor Card */}
                      <div className={styles.refactorCard}>
                        <div className={styles.cardSecHeading}>Suggested Refactor</div>
                        <p className={styles.refactorDesc}>
                          {aiSuggestion || 'Run AI Review to get a personalized refactor suggestion.'}
                        </p>
                        <button
                          className={`${styles.btnApplyFix} ${aiApplied ? styles.appliedFix : ''}`}
                          onClick={handleApplyAiFix}
                          disabled={aiApplied}
                        >
                          <Check size={14} />
                          <span>{aiApplied ? `AI Fix Applied (${qualityScore ?? 100}/100)` : 'Apply AI Fix'}</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom AI Prompt Bar with Morphing Send Button */}
                <div className={styles.aiChatBar}>
                  <input
                    type="text"
                    className={styles.aiChatInput}
                    placeholder="Ask Fyn AI to refactor, explain or optimize..."
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && aiPrompt.trim()) {
                        handleAiChat(aiPrompt);
                        setAiPrompt('');
                      }
                    }}
                    disabled={isSendingAiPrompt}
                  />
                  <div className={`${styles.btnSendWrap} ${aiPrompt.trim() ? styles.btnSendVisible : ''}`}>
                    <button
                      className={styles.btnSendAiAnimated}
                      disabled={isSendingAiPrompt || !aiPrompt.trim()}
                      onClick={() => {
                        if (aiPrompt.trim()) {
                          handleAiChat(aiPrompt);
                          setAiPrompt('');
                        }
                      }}
                      title="Send to Refyn AI"
                    >
                      {isSendingAiPrompt ? '…' : <Send size={14} />}
                    </button>
                  </div>
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

