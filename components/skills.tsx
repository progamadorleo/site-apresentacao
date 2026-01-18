export function Skills() {
  const frontendSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 70 },
    { name: "SQL", level: 65 },
    { name: "REST APIs", level: 75 },
  ]

  const tools = ["Git & GitHub", "VS Code", "Figma", "npm / yarn", "Tailwind CSS", "Next.js", "PostgreSQL", "MongoDB"]

  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Habilidades</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Frontend</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground font-mono text-sm">{skill.name}</span>
                    <span className="text-primary font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Backend</h3>
            <div className="space-y-5">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground font-mono text-sm">{skill.name}</span>
                    <span className="text-primary font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-card border border-border rounded-lg">
              <h4 className="text-foreground font-semibold mb-2">Idiomas</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Português</span>
                  <span className="text-primary">Nativo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Inglês</span>
                  <span className="text-primary">Básico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">Ferramentas & Tecnologias</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-card border border-border rounded-md text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300 font-mono"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
