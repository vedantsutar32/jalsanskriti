<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
## Project architecture

- Keep heritage content in typed shared data modules and render it through reusable archive components so every route presents the same factual status and metadata consistently.
- Treat map positions and all unverified heritage details as prototype information in both data and UI, because the archive must never imply field verification.

