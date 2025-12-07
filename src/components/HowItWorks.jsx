import React from "react";
import {
  Users,
  Mail,
  BarChart3,
  Share2,
  Rocket,
  Download,
  UsersRound,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Users,
      title: "Create Account",
      description:
        "Sign up in seconds and set up your profile to start creating polls.",
    },
    {
      icon: Mail,
      title: "Welcome Email",
      description:
        "Receive a friendly onboarding email with tips and quick links.",
    },
    {
      icon: BarChart3,
      title: "Build Polls",
      description:
        "Use an intuitive builder to craft interactive, multi-question polls.",
    },
    {
      icon: Share2,
      title: "Share Anywhere",
      description:
        "Publish across social, embed on sites, or share a direct link.",
    },
    {
      icon: Users,
      title: "Engage Audience",
      description:
        "Watch live responses, comments, and reactions in real time.",
    },
    {
      icon: Rocket,
      title: "Boost With AI",
      description:
        "Use AI tools to optimize reach and target the right audience.",
    },
    {
      icon: Download,
      title: "Export Insights",
      description: "Download reports, CSVs, and high-resolution charts.",
    },
    {
      icon: UsersRound,
      title: "Team Collaboration",
      description:
        "Invite moderators or analysts to co-manage polls and view insights.",
    },
    {
      icon: Download,
      title: "Export Insights",
      description: "Download CSV reports, charts, summaries, and analytics.",
    }
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ---------- Background overlays ---------- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700/10 via-pink-400/8 to-amber-400/6 pointer-events-none" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2
          id="how-it-works-heading"
          className="text-3xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
        >
          How It Works
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          A simple, powerful workflow from start to finish — create, share, and
          analyze polls in real time.
        </p>

        {/* ---------- GRID STEPS ---------- */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-black/35 transition-all"
              >
                {/* Number bubble */}
                <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mb-4">
                  <span className="text-green-400 font-bold text-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-green-500/15 border border-green-500/25 mb-4">
                  <Icon className="w-7 h-7 text-green-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
