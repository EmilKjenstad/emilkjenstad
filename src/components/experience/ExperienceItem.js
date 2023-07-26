import './Experience.css';

export default function ExperienceItem({experience}) {

    return (
        <div className="EducationItem">
            <div className="header">
                <p>{experience.role}</p>
                <p>{experience.period}</p>
            </div>
            <p className="degree">{experience.company} ({experience.location})</p>

            <hr />
            <p>dummy text</p>
        </div>
    );
}