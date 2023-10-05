# Chingu Project

## Prerequisites

Make sure you have the following installed in your system:

- [Node.js](https://nodejs.dev/en/)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/)

## Getting Started

- Create a fork of the repo
- Clone your forked repo locally `git clone <repo_link>`
- `cd` into the cloned directory
- Run `cp .env.example .env.local` and set up env variables
- Run `pnpm install` to install all the dependencies
- Create an upstream to the main repo `git remote add upstream https://github.com/chingu-voyages/v46-tier3-team-28.git`
- To update your fork with the main repo run `git pull upstream main`. Make sure you update your repo regularly to keep up with the main repo.
- Create a new branch `git checkout -b <branch_name>`
- Run `pnpm dev` and start developing

### Important Docs
- [Team decision Doc](https://docs.google.com/document/d/1QNtzHH0htso4upREefDTsfoanQfa5khGg5nX3uvCidU/edit)
- [Design Doc](https://app.eraser.io/workspace/y108M6uSFX3iSYVQMbHR?origin=share)
- [Figma Design](https://www.figma.com/file/GYwdok5q0bYfncDwNAVxm8/Chingu-Team-28?type=design&node-id=0-1&mode=design)
### Further reading

- [Git Flow](https://www.tomasbeuzen.com/post/git-fork-branch-pull/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

### Built with

- [Next.js](https://nextjs.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [TailwindCSS](https://tailwindcss.com/)
## Project Guideline

Your project's `readme` is as important to success as your code. For
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point -
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx
