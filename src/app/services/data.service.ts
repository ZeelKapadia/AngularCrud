import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data = [
        { id: 1, name: 'data1' },
        { id: 2, name: 'data2' },
        { id: 3, name: 'data3' },
        { id: 4, name: 'data4' },
        { id: 5, name: 'data5' },
        { id: 6, name: 'data6' },
        { id: 7, name: 'data7' },
        { id: 8, name: 'data8' },
        { id: 9, name: 'data9' },
        { id: 10, name: 'data10' },
        { id: 11, name: 'data11' },
        { id: 12, name: 'data12' },
        { id: 13, name: 'data13' },
        { id: 14, name: 'data14' },
        { id: 15, name: 'data15' },
        { id: 16, name: 'data16' },
        { id: 17, name: 'data17' },
        { id: 18, name: 'data18' },
        { id: 19, name: 'data19' },
        { id: 20, name: 'data20' },
    ];

    constructor(private http: HttpClient) { }

    getData() {
        return this.data;
    }

    setData(data: [{ id: number, name: string }]) {
        this.data = data;
        return this.data;
    }

    addDetails(data: { id: number, name: string }) {
        this.data.push(data);
        return this.data;
    }

    removeData(data: { id: number, name: string }) {
        const removeDataIndex = this.data.findIndex(x => x.id == data.id);
        this.data.splice(removeDataIndex, 1);
        return this.data;
    }

    updateRecord(data: { id: number, name: string }) {
        const oldDataIndex = this.data.findIndex(x => x.id == data.id);
        this.data[oldDataIndex] = data;
        return this.data;
    }
    // apiCalls
    GetDatabaseData(payload: any) {
        return this.http.post("url", payload);
    }

    AddDatabaseData(payload: any) {
        return this.http.post("urlAdd", payload);
    }

    DeleteDatabaseData(payload: any) {
        return this.http.post("urlDelete", payload);
    }

    UpdateDatabaseData(payload: any) {
        return this.http.post("urlUpdate", payload);
    }
}