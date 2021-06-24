import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const instructions = [
  {
    introText: `Our story begins at home. The most popular operating systems all have a
  concept of a home directory, which contains user-specific files. "Directory"
  is another name for a file folder.
  If your company set up the computer for you, there is probably already a
  directory with your name on it.
  For example, the author of this tutorial is Jen Weber, and her home directory
  on her computer is Users/jenweber.
  For this tutorial, we'll use "yourname" as a placeholder.`,
    cta: `To navigate to the home directory by command line, use the tilde symbol.
    Go ahead and try it now! Type ~ and press Enter.
    `,
    answer: '~',
    correctOutput: '',
    type: 'instruction',
  },
  {
    introText: `Ok! So now you are inside the home directory. How can you tell?
    You can always check where you are in the file system with the command "pwd",
    which stands for "print working directory."
    `,
    cta: `Type pwd into the form input and press Enter.`,
    answer: `pwd`,
    correctOutput: '/Users/yourname',
    type: 'instruction',
  },
  {
    introText: `Great! Every directory in your file system can have more directories
    and files inside of it. Your home directory is already filled with more
    directories automatically, like Downloads, Desktop, and Applications.

    Let's see what files and directories already exist, using the ls command.
    ls stands for list. ls will show you the list of files and directories
    that are inside your current working directory.
    `,
    cta: `Type "ls" into the form input and press Enter`,
    answer: `ls`,
    correctOutput: `
      Applications
      Desktop
      Documents
      Downloads
    `,
    type: 'instruction',
  },
  {
    introText: `
    Let's make a new directory, called projects. We'll use the mkdir command to
    do it. mkdir stands for make directory. It's the command-line equivalent
    of clicking "New folder" in a regular file browser.
    `,
    cta: `Type "mkdir projects" into the form input and press Enter`,
    answer: `mkdir projects`,
    correctOutput: '',
    type: 'instruction',
  },
  {
    introText: `
    Now, let's check where our new directory ended up!
    `,
    cta: `Type "ls" again to list the files in the current working directory.`,
    answer: `ls`,
    correctOutput: `
      Applications
      Desktop
      Documents
      Downloads
      projects
    `,
    type: 'instruction',
  },
  {
    introText: `
     Now that the projects folder exists, let's navigate into it using cd.
     cd stands for "change directory." cd is the command line equivalent of
     clicking on a file folder in a file browser.
    `,
    cta: `Type "cd projects" to enter the projects folder.`,
    answer: `cd projects`,
    correctOutput: ``,
    type: 'instruction',
  },
  {
    introText: `
     We are now inside the projects folder. We changed
     our working directory. How do we know?
    `,
    cta: `Earlier, you learned a command that stood for "print working directory." What is it?`,
    answer: `pwd`,
    correctOutput: `Users/yourname/projects`,
    type: 'instruction',
  },
  {
    introText: `
     The projects directory is empty. Let's make a file inside of it!
     The touch command creates a new file in your current working directory.
    `,
    cta: `Create a file called example.txt with the command "touch example.txt"`,
    answer: `touch example.txt`,
    correctOutput: ``,
    type: 'instruction',
  },
  {
    introText: `
     Let's check that the file was created.
    `,
    cta: `You already learned the command to list the files in a directory. What is it?`,
    answer: `ls`,
    correctOutput: `example.txt`,
    type: 'instruction',
  },
  {
    introText: `
     If you want to put some content into that new file, you can use the "open"
     command to open the file in your default file editor.

     The author of this tutorial has their default editor set to VSCode,
     but yours might be something different, like another code editor
     or maybe the TextEdit app that is installed on all new Mac computers.
    `,
    cta: `Try opening the file with "open example.txt"`,
    answer: `open example.txt`,
    correctOutput: `Use your imagination and pretend that one of those programs
    opened, and you typed some stuff into the file and clicked save.`,
    type: 'instruction',
  },
  {
    introText: `
     Ok, so you have made a file within the projects directory. Cool!
     Let's also make another new directory while we are here.
     You can call your new directory "notes."
    `,
    cta: `Do you remember how to make a new directory? Be sure to call it "notes" when you make it.`,
    answer: `mkdir notes`,
    correctOutput: ``,
    type: 'instruction',
  },
  {
    introText: `
     Let's check that the new directory has been created.
    `,
    cta: `You already learned the command to list the files in a directory. What is it?`,
    answer: `ls`,
    correctOutput: `notes`,
    type: 'instruction',
  },
  {
    introText: `
     Now, navigate inside of the new "notes" directory. 
    `,
    cta: `The command you should use is short for "change directory."
    Go ahead and "cd notes" to enter the directory.`,
    answer: `cd notes`,
    correctOutput: ``,
    type: 'instruction',
  },
  {
    introText: `
     Again, check where you are in the file system. What is your current
     working directory? 
    `,
    cta: `Check where you are in the file system with "pwd." `,
    answer: `pwd`,
    correctOutput: `/Users/yourname/projects/notes`,
    type: 'instruction',
  },
  {
    introText: `
     So far, you made a projects directory and navigated inside of it, then
     made a notes directory, and navigated one level deeper inside of it.
     How do you get back up to projects? The cd command is here to help again.
     Two dots means "go up one level." So to get from notes back to projects,
     you can do "cd .."
    `,
    cta: `Type "cd .." to go back up a level in the file system.`,
    answer: `cd ..`,
    correctOutput: ``,
    type: 'instruction',
  },
  {
    introText: `
     Now, where are we at in the file system?
    `,
    cta: `Type the command that prints your current working directory.`,
    answer: `pwd`,
    correctOutput: `/Users/yourname/projects`,
    type: 'instruction',
  },
  {
    introText: `
     Let's go up one more level, to get back to the home directory.
    `,
    cta: `You already learned the command to go one level up in the directories. What is it?`,
    answer: `cd ..`,
    correctOutput: ``,
    type: 'instruction',
  },
  {
    introText: `
     We just used "cd .." to get back to the home directory, one level at a time.
     But, remember the tilde, which looks like ~ ? We could have also typed ~
     to warp straight back home if we wanted to, from anywhere in the file system.

     Now that we are home again, let's reveal some files that were hidden from us before.
     Earlier, when you learned the list command "ls," that was all you typed
     into the terminal. However, many commands have extra options! By default,
     ls only shows you the files that do not start with a period.
    `,
    cta: `We'll use the "-a" option for "ls" to show all the files,
    even those that start with a period. Type "ls -a" to list them.`,
    answer: `ls -a`,
    correctOutput: `
      .zshrc
      Applications
      Desktop
      Documents
      Downloads
      projects
    `,
    type: 'instruction',
  },
  {
    introText: `
     One of the files that started with a . is a pretty important one.
     .zshrc contains your configuration for the bash shell.
     When you are setting up your developer environment, you might
     make some changes to it, while following the instructions in
     another tutorial or some onboarding guides. Now you know how to find it!
     You would do "~" to get home, "ls -a" to see all the files including those with
     . in their names, and then "open .zshrc" to make edits.

     Whenever you make changes to the .zshrc file, you need to let
     your terminal know about the changes. You can do this with the source command.
     Another option is to close all your terminals and totally restart them.
     Restarting is a good idea to do anytime you install something major, such as
     node, npm, nodenv, nvm, git, python, pip, rbenv, or ruby.

     For now, let's imagine that all you did was change your .zshrc file.
    `,
    cta: `Type "source ~/.zshrc" to update your terminal to use the latest
    configuration from your .zshrc file. When we put the ~ in front of .zshrc,
    we are telling bash to look for this file in the home directory. That way, this
    command works from anywhere in the file system!`,
    answer: 'source ~/.zshrc',
    correctOutput: ``,
    type: 'instruction',
  },
  {
    introText: `
    Cool, now your changes to .zshrc are active.

     You might be wondering at this point, "how would I know what the options are for all these
     different commands? I can't remember all this!"
     Well, good news, there's a command for that! The "man" command opens the manual
     that lists out all the options for a bash command.
    `,
    cta: `Try typing "man ls" to read all the options available for "ls". Right now,
    you don't need to learn or understand any of these other options. The important thing is that
    you know how to find them if you need them!`,
    answer: `man ls`,
    correctOutput: `
       NAME
        ls -- list directory contents

    SYNOPSIS
        ls [-ABCFGHLOPRSTUW@abcdefghiklmnopqrstuwx1%] [file ...]

    DESCRIPTION
        For each operand that names a file of a type other than directory, ls
        displays its name as well as any requested, associated information. (truncated)

        The following options are available:

        -@      Display extended attribute keys and sizes in long (-l) output.

        -1      (The numeric digit 'one'.)  Force output to be one entry per
                line.  This is the default when output is not to a terminal.

        -A      List all entries except for . and ...  Always set for the super-
                user.

        -a      Include directory entries whose names begin with a dot (.).

        -B      Force printing of non-printable characters (as defined by
                ctype(3) and current locale settings) in file names as xxx,
                where xxx is the numeric value of the character in octal.

        (and a whole bunch more options!)
        `,
    type: 'instruction',
  },
  {
    introText: `
     Another thing you will do while setting up your dev computer is that
     you will set some bash variables, aka environment variables.
     These variables can be used inside of other commands or even inside of
     other types of code, like JavaScript and Python.
     You will need to know how to create a variable,
     how to see what the variable's value is, and where to save it long-term.

     Let's start by making a variable. Make sure you use single quotes around
     the text. Otherwise, bash will try to understand the text itself as a command.
     Commonly, these variables are in all-caps. 
    `,
    cta: `Type REMINDER='Take chances, make mistakes, get messy!' to create a variable called REMINDER.`,
    answer: `REMINDER='Take chances, make mistakes, get messy!'`,
    correctOutput: ``,
    type: 'instruction',
  },
  {
    introText: `
     Let's check to make sure that variable was set. We can do this with the
     "echo" command. Whenever you want to use a variable in bash, you need to put
     a dollar sign in front of it too.

     If you wanted this variable to be available every time you start
     a new terminal, you could save it in your .zshrc file.
    You might see instructions like that in your dev environment setup guides or
    tutorials shared by your coworkers. If you do that, don't forget to run source again!
    `,
    cta: `Type "echo $REMINDER" to see your variable's value printed out.`,
    answer: `echo $REMINDER`,
    correctOutput: `Take chances, make mistakes, get messy!`,
    type: 'instruction',
  },
  {
    introText: `
      That's it for our bash tutorial!
    `,
    cta: `Good luck in your new job or project!`,
    answer: ``,
    correctOutput: ``,
    type: 'instruction',
  },
];

export default class TerminalComponent extends Component {
  @tracked outputHistory = [instructions[0]];

  @tracked filepaths = {};

  @tracked progress = 0;

  tryAgain = { text: 'Please try again.' };

  @action
  onSubmit(inputText) {
    let currentStep = instructions[this.progress];
    this.outputHistory.push({ text: inputText, type: 'entry' });
    if (inputText === currentStep.answer) {
      this.outputHistory.push({
        text: currentStep.correctOutput,
        type: 'result',
      });
      this.outputHistory.push(instructions[this.progress + 1]);
      this.progress += 1;
    } else {
      this.outputHistory.push({
        text: 'Please try again.',
        cta: currentStep.cta,
        type: 'incorrect',
      });
    }
    this.outputHistory = this.outputHistory;
  }
}
