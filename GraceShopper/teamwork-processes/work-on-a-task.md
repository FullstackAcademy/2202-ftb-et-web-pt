# Teamwork: Work on a Task

For a given task with an existing GitHub team project, we recommend the following workflow:

1. **Anybody**: Make a GitHub issue for the task (including any relevant labels or milestones). https://github.com/2105-sjs/TEAM-NAME-HERE/issues
2. **Anybody**: Assign a pair (or yourself, or one person, **Coder**) to work on the task.
3. Move the card from "To do" to "In progress" https://github.com/2105-sjs/TEAM-NAME-HERE/projects/1
4. **Coder**: Branch off of `dev` (use `git checkout -b branch-name-here-#issue` to create a new branch - include the issue # in the branch name).
5. **Coder**: Continually edit and `git commit -m "message"` (over and over).
6. **Coder**: If any updates get made remotely to GitHub's dev branch, locally switch to `dev`, `git pull`, switch to your working branch, then `git merge dev`. Fix conflicts.
7. **Coder**: Push the branch to origin whenever you want to: a) make / update a pull request; b) share the current code with others (e.g. when switching driver and navigator), or; c) save it more persistently (e.g. in case something goes wrong with your local storage).
8. **Coder**: When task is "complete", make a pull request (and reference the issue) on GitHub.
9. **Anybody**: Assign a person (**Reviewer**) not in the pair to code review the pull request.
10. **Reviewer**: Review the code:
   1. **Reviewer**: If you have no comments (*really you have none?*), go to #11. Otherwise...
   2. **Reviewer**: Make round of comments.
   3. **Coder**: Address round of comments, likely repeating steps #5-7. Pass back to **Reviewer** for #10.i
11. **Reviewer**: Merge the PR.
12. **Everybody**: 
   1. `git checkout dev`
   2. `git pull`

## Follow-up (homework, sometime AFTER class)

- ["Git Feature Branch Workflow"](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- ["About Pull Request Reviews"](https://help.github.com/articles/about-pull-request-reviews/)
