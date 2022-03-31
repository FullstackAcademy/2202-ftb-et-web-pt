 
## Local vs Remote
Local Refers to the git repo on your computer. 
Remote refers to the git repo online, usually on Github
 
## Pulling down a Repository 
```bash 
 git remote add origin <github ssh link>
 git pull origin main 
```
 - git remote 
    - You can have multiple remote 
- git remote -v  => Checks what remotes you've added
- git remote -h => Shows the git remote commands you can execute 

## Pushing Changes from Local to Remote
```bash 
 git add . 
 git commit -m "I have added all my changes to staging "
 git push origin main
```
- Staging Changes: 
git is a tool to track a history of changes. Changes grouped together and added to the history in episodes called "commits"
In order to commit a change, you must "add it to staging" or "stage" the change
Staged Changes will be "committed" and added to the git history on git commit 

- git log will show commit history 

- git push origin will append the most recent commits on your local repository to the git commit history on origin/github, assuming that the commit history is the same and there aren't any conflicts

## Git Conflicts
git conflicts occur when we're trying to merge together two commit histories. There's a commit on the git history that changes a line that my git commit is trying to change 

Tell git which change you'd like to keep; delete the ===== and <<<<>>>> and commit. 

## Branches 
Branches are a way to isolate your changes and the state the of repo while you write new code. 
Fewer conflicts and easier to organize the git history. 
A branch will deviate from the main branch, extend it's own git history as we add commits. Then, we'll merge it back into the main branch, adding my changes to the main branch with a Pull Request    

 - git branch => list the available branches on local 
 - git checkout branch_name => change to another branch 
    - this can also checkout a remote branch
 - git checkout -b branch_name => create a new branch and switch to it 

- git stash => stash away your staged/untracked changes so that you can switch to another branch 
- git stash pop => retreive stashed changes 

- git merge => merge two branches locally

## Pull Request
After you've git commited
```bash
    git push origin <branch_name>
```
Then go to github, click on "New Pull Request" and find your branch 
This will create a request to add these commits to main. 
Other team members can review and commit
Then once you're ready to merge the branch into main, Click the green merge button

## Extra Practice 
 http://git.fullstackacademy.com/