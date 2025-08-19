import MyLink from './components/MyLink';
import Paper from './components/Paper';
import ProjectCard from './components/ProjectCard';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <>
    <div className="max-w-3xl mx-auto p-5 space-y-8">
      <section className="flex flex-col xs:flex-row mt-8">
        <div className="w-full xs:w-3/4 xs:pr-5 text-center xs:text-left">
          <p className="text-center mb-5 text-4xl">Daniel Chen</p>
          
          <div className="xs:hidden mb-6 flex justify-center">
            <img 
              src="/image.png" 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          
          <div className="space-y-2">
            <p>I am a third year Mathematics undergraduate at the University of Cambridge. This summer I've just finished a research internship at <MyLink data="https://silvaco.com/">Silvaco</MyLink>, and for now I'm working on a quant trading project.</p>
            <p>Please feel free to give me anonymous feedback, suggestions, thoughts, jokes etc. via my <MyLink data="https://www.admonymous.co/chen">admonymous page</MyLink>.</p>
          </div>
          <div className="text-center mt-4 flex justify-center gap-6">
            <MyLink data="mailto:dc872@cam.ac.uk">
              <HiMail className="w-6 h-6" />
            </MyLink>
            <MyLink data="https://linkedin.com/in/daniel-z-chen">
              <FaLinkedin className="w-6 h-6" />
            </MyLink>
            <MyLink data="https://github.com/dnzc">
              <FaGithub className="w-6 h-6" />
            </MyLink>
          </div>
        </div>
        
        <div className="hidden xs:block w-1/4">
          <img 
            src="/image.png" 
            alt="Profile" 
            className="w-full h-auto rounded-full aspect-square min-w-[100px]"
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-normal xs:mb-2 text-center xs:text-left">Research</h2>

        <div className="research-papers">
          <Paper 
            title="Associated Permutations of Complete Non-Ambiguous Trees"
            titleHref="https://doi.org/10.46298/dmtcs.11169"
            authors="Daniel Chen, Sebastian Ohlig"
            subtitle={<><em>Discrete Mathematics & Theoretical Computer Science</em>, vol 25:2 (April 2024)</>}
            image="/entries/cnat.png"
            links={[
              { label: "full text", url: "https://dmtcs.episciences.org/13114/pdf" },
              { 
                label: "bibtex", 
                type: "copy",
                content: `@article{chen2024associated,
  title={Associated Permutations of Complete Non-Ambiguous Trees},
  author={Chen, Daniel and Ohlig, Sebastian},
  journal={Discrete Mathematics \\& Theoretical Computer Science},
  volume={25},
  number={2},
  year={2024},
  publisher={Episciences}
}`
              },
              { label: "citations", url: "https://scholar.google.com/scholar?cites=821849534694441299" }
            ]}
            description={<>As part of <MyLink data="https://promys-europe.org/about-promys-europe/">PROMYS Europe</MyLink> 2022, I worked in a pair on a six-week research project in combinatorics, culminating in proving an open conjecture at age 17. We established a new bijection from upper-diagonal CNMs to tree-like tableaux, and after the program we continued to discover new ideas, defining a novel row-and-column swapping operation.</>}
          />
        </div>

      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-normal mb-2 text-center xs:text-left">arXiv e-prints</h2>
        <p className="text-center xs:text-left"><MyLink data="https://arxiv.org/abs/2404.04058">Alternative Proof of the Determinant of Complete Non-Ambiguous Trees</MyLink> (April 2024)</p>
        <p className="text-center xs:text-left"><MyLink data="https://arxiv.org/abs/2308.14635">Expected Number of Dice Rolls Until an Increasing Run of Three</MyLink> (October 2023)</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-normal mb-4 text-center xs:text-left">Other Projects</h2>
        <div className="flex flex-wrap gap-4 items-start justify-center xs:justify-start">

          <ProjectCard
            title="Maths Notes"
            description="A custom static site generator built for creating and maintaining mathematical notes across two websites."
            link="https://github.com/dnzc/notes"
            websites={[
              { label: "notes.danielc.rocks", url: "https://notes.danielc.rocks" },
              { label: "tripos.guru", url: "https://tripos.guru" }
            ]}
            tags={["Python", "Jinja2", "Next.js"]}
            image="/entries/notes.png"
          />

          <ProjectCard
            title="Physarum Slime"
            description="A physarum slime simulation where agents move around, leaving diffusing trails for other agents to follow."
            link="https://github.com/dnzc/OFProjects/tree/main/physarumSlime"
            tags={["C++", "Shader", "Simulation"]}
            image="/entries/slime.png"
          />

        </div>
      </section>
      
      <footer className="text-xs text-center xs:text-right">
        The source code for this site can be found <MyLink data="https://github.com/dnzc/homepage">here</MyLink>. Design inspired by <MyLink data="https://github.com/jonbarron/jonbarron.github.io">Jon Barron's</MyLink> site.
      </footer>
    </div>
  </>
  );
}