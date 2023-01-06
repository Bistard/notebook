# Git Commands

## Basic

```bash
# 下载remote repository到当前path下
git clone https://...

# 打印当前branch的信息
git status

# 将当前的修改加入到stash里
git add

# 承认一次commit
git commit

# 将local的commit更新到当前branch的remote上
git push

# 将remote的commit更新到当前branch的local下
git pull
```



## Commit

```bash
# 将当前修改内容添加到上一个commit并且不修改commit信息
git add .
git commit --amend --no-edit
```

## Log

```bash
# 打印commit历史
git log

# 好看点
git log --pretty=format:"%h - %an, %ar : %s"
```

## Branch

```bash
# 列出所有local branch.
git branch

# 列出所有remote branch.
git branch -r

# 同时列出所有local branch和remote branch.
Git branch -a

# switch到一个branch, 如果没有, 则创建一个.
git checkout <branch_name>

# 创建了一个branch之后, 会立刻切到该branch.
git checkout -b <branch_name>

# push该branch进入remote.
git push -u origin <branch_name>

# Those will checkout the <branch_name> as a new local branch, and specify a new remote one.
git checkout -t origin/<branch_name>

# 删除一个local branch, 但是前提是此时不在该将要被删除的branch中.
git branch -d <branch_name>

# 删除一个remote branch.
git push origin --delete <branch_name>

# 查看两个branch的区别.
git diff <branch_name_1> <branch_name_2>

# 更改local/remote branch的名字.
git branch -m <new_name>
git push origin -u <new_name>
git push origin --delete <old_name>
```

## Merge

```bash
# 将<branch_name> merge到当前的branch下
git merge <branch_name>
```



## Recovery

```bash
# completely remove all staged and unstaged changes to tracked files.
git reset --hard

# 回溯到commit_id这个commit version.
git reset --hard commit_id

# 开一个新的local branch并checkout到某个commit_id的branch版本.
git checkout -b branch_name commit_id

# rollback到上一个commit (locally)
git reset HEAD~1
git reset HEAD^

# rollback到上一个commit (remote)
git push -f
```

