
import React, {useState} from "react";

// Intersection type: combining attributes of types using '&' hence {item, updateItem, deleteItem}.
// ItemProps.item attribute is combined. 
type Props = {
    saveItem: (e: React.FormEvent, formData: IItem | any) => void;
}


const AddItem: React.FC<Props> = ({saveItem}) => {
    const [formData, setFormData] = useState<IItem | {}>();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
        
    }

    return (
        <form className="Form" onSubmit={(e) => saveItem(e, formData)}>
        <div className="Card">
            <div className="Card-text">
                <label className="Card-label">Item Id: </label>
                <input
                    onChange={handleForm}
                    type="text"
                    id="itemId" />
            </div>
            <div className="Card-text">
                <label className="Card-label">Name: </label>
                <input
                    onChange={handleForm}
                    type="text"
                    id="name" />
            </div>
            <div className="Card-text">
                <label className="Card-label">Description: </label>
                <input
                    onChange={handleForm}
                    type="text"
                    id="description" />
            </div>
            <div className="Card-text">
                <label className="Card-label">Full Description: </label>
                <input
                    onChange={handleForm}
                    type="text"
                    id="fullDescription" />
            </div>
            <div className="Card-text">
                <label className="Card-label">Price: </label>
                <input
                    onChange={handleForm}
                    type="text"
                    id="price" />
            </div>
            <div className="Card-text">
                <label className="Card-label">Area Code: </label>
                <input
                    onChange={handleForm}
                    type="text"
                    id="areaCode" />
            </div>
        </div>
        <button disabled={formData === undefined ? true : false}>Add Item</button>

        </form>

    )
}

export default AddItem
