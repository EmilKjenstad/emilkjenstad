import './Publication.css';

export default function PublicationItem({publication}) {

    const authors_list = publication.authors.join(", ");
    return (
        <div className="EducationItem">
            <p>{publication.title}</p>
            <p className="degree">{authors_list}</p>
            <hr />
            <p>Maybe a layout similar to DuO?</p>
            <p>Add link to publication</p>
        </div>
    );
}