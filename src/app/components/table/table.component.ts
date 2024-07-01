import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { PeopleService } from '../../services/people/people.service';
import { Person } from '../../services/people/person.interface';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    standalone: true,
    imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, CommonModule, FormsModule],
    providers: [PeopleService],
    styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit {
    people!: Person[];
    searchKeyword: string = '';
    loading: boolean = true;
    selectedPerson: Person | null = null;

    constructor(private peopleService: PeopleService) {}

    ngOnInit() {
        this.loading = false;

        this.peopleService.getPeople().then(data => {
            this.people = data;
        });
    }

    onRowSelect(event: any) {
        alert(`Favorito agregado: ${event.data.name}`);
    }
    onRowUnselect(event: any) {
        alert(`Favorito eliminado: ${event.data.name}`);
    }
    clear(table: Table) {
        table.clear();
    }
}