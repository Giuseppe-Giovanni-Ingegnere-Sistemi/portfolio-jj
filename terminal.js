class Terminal {
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.setupEventListeners();
        this.commandHistory = [];
        this.historyIndex = -1;
        this.initialize();
    }

    initialize() {
        this.writeOutput('Welcome to CyberPortfolio v1.0.0');
        this.writeOutput('Type "help" for available commands\n');
    }

    setupEventListeners() {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = this.input.value.trim();
                this.writeOutput(`$ ${command}`);
                this.handleCommand(command);
                this.commandHistory.push(command);
                this.historyIndex = this.commandHistory.length;
                this.input.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.input.value = this.commandHistory[this.historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    this.input.value = this.commandHistory[this.historyIndex];
                } else {
                    this.historyIndex = this.commandHistory.length;
                    this.input.value = '';
                }
            }
        });
    }

    writeOutput(text) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.textContent = text;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    handleCommand(cmd) {
        switch (cmd.toLowerCase()) {
            case 'help':
                this.writeOutput('Available commands:');
                this.writeOutput('  help     - Show this help message');
                this.writeOutput('  whoami   - About me');
                this.writeOutput('  projects - View my projects');
                this.writeOutput('  skills   - List my skills');
                this.writeOutput('  contact  - Contact information');
                this.writeOutput('  clear    - Clear the terminal');
                break;

            case 'whoami':
                this.writeOutput('=== About Me ===');
                this.writeOutput('Full Stack Developer');
                this.writeOutput('Passionate about cybersecurity and web development');
                this.writeOutput('Currently hacking the matrix...');
                break;

            case 'projects':
                this.writeOutput('=== Projects ===');
                this.writeOutput('1. Quantum Encryption Tool');
                this.writeOutput('   - Advanced encryption system');
                this.writeOutput('   - Status: Classified');
                this.writeOutput('\n2. Neural Network Interface');
                this.writeOutput('   - AI-powered data analysis');
                this.writeOutput('   - Status: In Development');
                break;

            case 'skills':
                this.writeOutput('=== Skills ===');
                this.writeOutput('> Programming Languages');
                this.writeOutput('  JavaScript [██████████] 100%');
                this.writeOutput('  Python     [████████──] 80%');
                this.writeOutput('  Rust       [██████────] 60%');
                this.writeOutput('\n> Cybersecurity');
                this.writeOutput('  Penetration Testing [████████──] 80%');
                this.writeOutput('  Network Security    [███████───] 70%');
                break;

            case 'contact':
                this.writeOutput('=== Contact Information ===');
                this.writeOutput('Email: cyber@hacker.net');
                this.writeOutput('GitHub: github.com/cyberhacker');
                this.writeOutput('Matrix: [REDACTED]');
                break;

            case 'clear':
                this.output.innerHTML = '';
                break;

            case 'sudo':
                this.writeOutput('Nice try, hacker! 😎');
                this.writeOutput('Access denied: Insufficient privileges');
                break;

            case '':
                break;

            default:
                this.writeOutput(`Command not found: ${cmd}`);
                this.writeOutput('Type "help" for available commands');
        }
    }
}

// Initialize Terminal
const terminal = new Terminal();