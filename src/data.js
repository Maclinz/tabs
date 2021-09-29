import js from './img/skills/js.svg';
import python from './img/skills/python.svg';
import css from './img/skills/css.svg';
import gh from './img/skills/gh.svg';
import adobe from './img/skills/adobe.svg';
import linux from './img/skills/linux.svg';


const data = [
    {
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis viverra viverra mollis sed vitae fames nunc sollicitudin viverra. Curabitur massa, ultrices diam ipsum faucibus risus. Hendrerit justo, quis massa a elementum. At elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis viverra viverra mollis sed vitae fames nunc sollicitudin viverra. Curabitur massa, ultrices diam ipsum faucibus risus. Hendrerit justo, quis massa a elementum. At elementum.',
        progress: ['CSS3', 'Adobe Cloud', 'Github', 'Linux OS', 'Javascript', 'Python'],
        progressNumber: ['85%','85%','85%','85%','85%','85%'],
        progressImages: [css, adobe, gh, linux, js, python],
        tab: 'My Skills'
    },
    {
        id: 2,
        skills: ['Creative Design', 'Management', 'Organized', 'Fast Learner', 'Team Player'],
        bgColours: ['#F44E77', '#554DDE'],
        awards: ['badge', 'coding', 'experience'],
        awardsText: ['10+', '15+', '69+'],
        languages: ['English', 'German', 'French'],
        social: ['facebook', 'instagram', 'twitter'],
        tab: 'Personal Information'
        
    },
    {
        id: 3,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mattis nam ipsum pharetra porttitor eu orci, nisi. Magnis elementum vitae eu, dui et. Tempus etiam feugiat sem augue sed sed. Tristique feugiat mi feugiat integer consectetur sit enim penatibus. Quis sagittis proin fermentum tempus uspendisse ultricies. Tellus sapien, convallis proin pretium.',
        tab: 'Education'
    },
    {
        id: 4,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mattis nam ipsum pharetra porttitor eu orci, nisi. Magnis elementum vitae eu, dui et. Tempus etiam feugiat sem augue sed sed. Tristique feugiat mi feugiat integer consectetur sit enim penatibus. Quis sagittis proin fermentum tempus uspendisse ultricies. Tellus sapien, convallis proin pretium.',
        tab: 'Experience'
    },
    {
        id: 5,
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mattis nam ipsum pharetra porttitor eu orci, nisi. Magnis elementum vitae eu, dui et. Tempus etiam feugiat sem augue sed sed. Tristique feugiat mi feugiat integer consectetur sit enim penatibus. Quis sagittis proin fermentum tempus uspendisse ultricies. Tellus sapien, convallis proin pretium.`,
        tab: 'About'
    }
]

export default data;