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

    writeHTML(html) {
        const container = document.createElement('div');
        container.className = 'terminal-line';
        container.innerHTML = html;
        this.output.appendChild(container);
        this.output.scrollTop = this.output.scrollHeight;
    }

    async simulateHacking() {
        const hackingLines = [
            'Initializing hack sequence...',
            'Bypassing security protocols...',
            'Accessing mainframe...',
            'Decrypting security layers...',
            'Injecting payload...',
            'Establishing backdoor connection...',
            'Extracting sensitive data...',
            'Covering tracks...',
            'SECURITY BREACH DETECTED!',
            'SYSTEM LOCKDOWN INITIATED!',
            'TRACE PROGRAM ACTIVATED!',
            '[ERROR] Access Denied: Buen intento pero es un portfolio, no una terminal de hacker 😎'
        ];

        for (const line of hackingLines) {
            await new Promise(resolve => setTimeout(resolve, 300));
            this.writeOutput(line);
            
            // Add random hex codes for effect
            if (line !== hackingLines[hackingLines.length - 1]) {
                const hexLine = Array(Math.floor(Math.random() * 3) + 1)
                    .fill(0)
                    .map(() => Math.random().toString(16).substr(2, 8))
                    .join(' ');
                await new Promise(resolve => setTimeout(resolve, 100));
                this.writeOutput(`0x${hexLine}`);
            }
        }
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
                this.writeHTML(`
                    <div class="profile-container">
                        <img src="https://avatars.githubusercontent.com/u/1234567" alt="Jose Juan Gallegos Suarez" class="profile-image">
                        <div class="profile-info">
                            <h2 class="profile-name">Jose Juan Gallegos Suarez</h2>
                            <p>Full Stack Developer</p>
                            <p>Passionate about cybersecurity and web development</p>
                            <a href="/path-to-your-cv.pdf" download class="download-cv">
                                Download CV <span class="download-icon">⬇</span>
                            </a>
                        </div>
                    </div>
                `);
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
                this.simulateHacking();
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