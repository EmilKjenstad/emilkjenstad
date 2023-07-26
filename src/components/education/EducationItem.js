import './Education.css';

export default function EducationItem({school}) {
    
    return (
        <div className="EducationItem">
            <div className="header">
                <p>{school.name}</p>
                <p>{school.period}</p>
            </div>

            <p className="degree">{school.degree}</p>
            <hr />
            <p>GPA - {school.gpa}</p>
        </div>
    );
}