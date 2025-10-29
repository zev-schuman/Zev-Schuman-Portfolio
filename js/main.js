// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed nav
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Project Modal
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');
const projectButtons = document.querySelectorAll('.project-more');

const projectData = {
    'yerf-dog': {
        title: 'Yerf-Dog: An Autonomous Buggy',
        type: 'Senior Thesis | Spring 2025',
        description: 'This project represents my senior thesis work at Princeton University, where I collaborated with two teammates to transform a non-functional go-kart into a fully autonomous vehicle.',
        details: [
            'Rebuilt and electrified the entire drivetrain, replacing internal combustion with electric motor systems',
            'Designed and installed a custom gearbox optimized for the new electric powertrain configuration',
            'Implemented a steer-by-wire mechanism for precise autonomous control',
            'Developed a computer vision system using onboard cameras and machine learning algorithms to enable real-time road sensing and autonomous steering control',
            'Created detailed CAD models using CREO Parametric for mechanical design and fabrication',
            'Successfully demonstrated autonomous navigation capabilities'
        ],
        tags: ['Autonomous Systems', 'Computer Vision', 'Control Systems', 'CREO Parametric', 'Machine Learning'],
        image: 'Image placeholder for Yerf-Dog project'
    },
    'space-mission': {
        title: 'Space Mission Design',
        type: 'Space System Design Class | Spring 2024',
        description: 'Designed a comprehensive space mission to achieve complete optical coverage of the moon using a constellation of satellites.',
        details: [
            'Led the structures and materials section of a team designing a mission to deploy 12 satellites into lunar orbit',
            'Utilized Lagrange points and complex orbital mechanics to achieve optimal satellite positioning for complete optical coverage',
            'Designed satellite chassis architecture considering structural integrity and mass constraints',
            'Selected appropriate materials balancing strength, weight, and space environment compatibility',
            'Managed mass and volume budgets, allocating resources to propulsion, communications, and payload systems',
            'Presented comprehensive mission plans to NASA engineers at Goddard Space Flight Center'
        ],
        tags: ['Space Systems', 'Structures', 'Mission Design', 'Orbital Mechanics', 'Project Management'],
        image: 'Image placeholder for Space Mission Design project'
    },
    'wing': {
        title: 'Cantilevered Wing Design',
        type: 'Engineering Design Class | Spring 2023',
        description: 'A structural engineering competition project focused on optimizing weight and deflection under load.',
        details: [
            'Designed a 2-foot aluminum and nylon composite wing structure with the objective of minimizing both weight and deflection',
            'Performed static simulations using CREO Parametric CAD software to optimize structural performance',
            'Manufactured components using CNC machining, 3D printing, and manual milling techniques',
            'Implemented finite element analysis to predict stress distribution and deformation',
            'Won class competition by achieving both the lightest successful model (14.2 ounces) and the smallest deflection (4 inches under a 97-pound load)',
            'Demonstrated ability to balance competing design objectives through systematic optimization'
        ],
        tags: ['FEA', 'CNC Machining', 'Optimization', 'Structural Design', 'Material Selection'],
        image: 'Image placeholder for Cantilevered Wing project'
    },
    'uav-launcher': {
        title: 'UAV Launcher Design',
        type: 'Advanced Technology and Research Corp | Summer 2024',
        description: 'Worked with an engineering team to design, build, and test a UAV launcher system.',
        details: [
            'Collaborated with a team of engineers to design and build a UAV launcher system',
            'Created calculation workbooks and analytical models to predict launch outcomes based on various parameter settings',
            'Compared analytical predictions with test data to determine optimal launch configurations',
            'Designed, manufactured, and assembled mechanical components using SolidWorks',
            'Performed live testing in Huntsville, Alabama in collaboration with Griffon Aerospace',
            'Validated design performance through iterative testing and refinement'
        ],
        tags: ['UAV Systems', 'Testing', 'SolidWorks', 'Analytical Modeling', 'Collaboration'],
        image: 'Image placeholder for UAV Launcher project'
    }
};

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectCard = button.closest('.project-card');
        const projectId = projectCard.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            modalBody.innerHTML = \`
                <h2 style="margin-bottom: 1rem; color: #00d4ff;">\${project.title}</h2>
                <p style="color: #00d4ff; margin-bottom: 1.5rem;">\${project.type}</p>
                <p style="margin-bottom: 1.5rem; line-height: 1.8;">\${project.description}</p>
                <h3 style="margin-bottom: 1rem; color: #8b5cf6;">Key Accomplishments:</h3>
                <ul style="list-style: none; margin-bottom: 2rem;">
                    \${project.details.map(detail => \`
                        <li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
                            <span style="position: absolute; left: 0; color: #10b981;">→</span>
                            \${detail}
                        </li>
                    \`).join('')}
                </ul>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    \${project.tags.map(tag => \`
                        <span style="padding: 0.25rem 0.75rem; background: #374151; border: 1px solid #4b5563; font-size: 0.85rem; color: #8b5cf6; font-family: monospace;">
                            \${tag}
                        </span>
                    \`).join('')}
                </div>
            \`;
            modal.style.display = 'block';
        }
    });
});

// Close Modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Scroll animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for scroll animation
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Add active navigation highlighting on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
