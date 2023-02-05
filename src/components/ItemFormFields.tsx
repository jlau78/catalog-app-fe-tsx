import React from "react";

type Props = ItemProps & {
    updateItem: (item: IItem) => void
    deleteItem: (itemId: string) => string
}

const UpdateItem: React.FC<Props> = ({item, updateItem, deleteItem}) => {

    return (
        <div className="Card">
           <div className="Card-text">
                <h3>{item.name}</h3>
                <span>{item.description}</span>
                <div className="Card--button">
                    <button
                        onClick={() => updateItem(item)}
                        className="Card--button__done">
                            Save 
                        </button>
                </div>

                <div className="Card--button">
                    <button
                        onClick={() => deleteItem(item.itemId)}
                        className="Card--button__done">
                            Delete 
                        </button>
                </div>
           </div>

        </div>
    )
}

export default UpdateItem
