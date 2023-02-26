import axios, {AxiosResponse} from "axios"

const baseUrl: string = "http://localhost:4000"

export const getItems = async(): Promise<AxiosResponse<ApiDataType>> => {

    try {
        const items: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/items"
        )
        return items

    } catch (error) {
        console.log(error)
        throw error
    }
    
}

export const getItem = async(itemId: string | any): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const item: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + `/item/${itemId}`);
        
        return item;

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const addItem =async(formData: IItem): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const item: IItem = {
            itemId: formData.itemId,
            name: formData.name,
            description: formData.description,
            fullDescription: formData.fullDescription,
            price: formData.price,
            areaCodes: formData.areaCodes,
            thumbnails: formData.thumbnails,
            featureList: formData.featureList
        }

        const saveItem: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-item",
            item
        )
        
        return saveItem

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const updateItem = async(item: IItem): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const itemToUpdate: IItem = {
            itemId: item.itemId,
            name: item.name,
            description: item.description,
            fullDescription: item.fullDescription,
            price: item.price,
            areaCodes: item.areaCodes,
            thumbnails: item.thumbnails,
            featureList: item.featureList
        }


        const updatedItem: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/update-item/${item.itemId}`,
            itemToUpdate
        )
        return updatedItem

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const deleteItem = async(itemId: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedItem: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/delete-item/${itemId}`
        )
        return deletedItem;

    } catch (error) {
        console.log(error)
        throw error
    }
}