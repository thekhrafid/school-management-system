'use client';

export default function Stats() {
  const stats = [
    { label: 'Pass Rate', value: '96%' },
    { label: 'Average Score', value: '78%' },
    { label: 'Student Satisfaction', value: '94%' },
    { label: 'Teacher Retention', value: '92%' },
  ];

  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our Achievement</h2>
          <p className="text-xl mt-4 opacity-90">
            Consistently delivering excellence across all metrics
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
