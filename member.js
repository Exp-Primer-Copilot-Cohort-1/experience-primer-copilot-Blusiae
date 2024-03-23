function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = document.querySelector('.member-skills');
  const memberSkillsList = document.querySelector('.member-skills-list');
  const memberSkillsClose = document.querySelector('.member-skills-close');

  if (member) {
    member.addEventListener('click', () => {
      memberSkills.classList.add('active');
    });

    memberSkillsClose.addEventListener('click', () => {
      memberSkills.classList.remove('active');
    });

    memberSkillsList.addEventListener('click', (e) => {
      if (e.target.classList.contains('member-skill')) {
        memberSkills.classList.remove('active');
      }
    });
  }
}