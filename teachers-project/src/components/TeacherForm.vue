<template>
    <section class="teacher-form">
        <h3>Añadir Profesor</h3>

        <div class="fields">

            <div>
                <label for="name">Nombre</label>
                <input id="name" type="text" placeholder="Nombre" v-model="teacher.teacherName" />
            </div>

            <div>
                <label for="apellidos">Apellidos</label>
                <input id="apellidos" type="text" placeholder="Apellidos" v-model="teacher.surnames" />
            </div>

            <div>
                <label for="dninif">DNI/NIF</label>
                <input id="dninif" type="text" placeholder="DNI/NIF" v-model="teacher.dni" />
            </div>

            <div class="subjects">
                <label for="materias">Materias</label>
                <div class="subject-input">
                    <input id="materias" type="text" placeholder="Materias" v-model="subject" />

                    <button @click="addSubject">Añadir</button>
                </div>

                <ul v-if="teacher.subjects.length > 0">
                    <li v-for="(subject, index) in teacher.subjects" :key="index">{{ subject }} <button
                            @click="removeSubject(index)">x</button></li>
                </ul>
            </div>

            <div class="documentacion">
                <input type="checkbox" name="documentacionEntregada" id="documentacionEntregada"
                    v-model="teacher.doc" />
                <label for="documentacionEntregada">Documentación entregada</label>
            </div>
        </div>

        <button @click="handleAddTeacher">Guardar</button>
    </section>

    <section v-if="teachers.length > 0" class="teacher-list">
        <h3>Listado de Profesores</h3>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI / NIF</th>
                    <th>Materias</th>
                    <th>Documentación</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(teacher, index) in teachers" :key="index">
                    <td>{{ teacher.teacherName }}</td>
                    <td>{{ teacher.surnames }}</td>
                    <td>{{ teacher.dni }}</td>
                    <td>{{ teacher.subjects.join(', ') }}</td>
                    <td>{{ teacher.doc ? 'Sí' : 'No' }}</td>
                </tr>
            </tbody>
        </table>
    </section>

</template>

<script lang="ts" setup>

import { ref, Ref } from 'vue';

interface ITeacher {
    teacherName: string;
    surnames: string;
    dni: string;
    subjects: string[];
    doc: boolean;
}

let initialTeacher: ITeacher = ({
    teacherName: '',
    surnames: '',
    dni: '',
    subjects: [],
    doc: false
});

let teacher: Ref<ITeacher> = ref({ ...initialTeacher });



const teachers: Ref<Array<ITeacher>> = ref([]);

let subject: Ref<string> = ref('');

const addSubject = () => {
    teacher.value.subjects.push(subject.value);
    subject.value = '';
}

const removeSubject = (index: number) => {
    teacher.value.subjects.splice(index, 1);
}

const handleAddTeacher = () => {
    teachers.value.push({
        teacherName: teacher.value.teacherName,
        surnames: teacher.value.surnames,
        dni: teacher.value.dni,
        subjects: teacher.value.subjects,
        doc: teacher.value.doc
    });

    teacher.value = { ...initialTeacher, subjects: [] };
}

</script>

<style scoped>
h3 {
    text-align: center;
    color: #34495e;
    text-transform: uppercase;
}

.teacher-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .fields {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        div {
            display: flex;
            flex-direction: column;

            & label {
                color: #34495e;
                text-transform: uppercase;
                margin-bottom: .5rem;
            }

            & input {
                padding: .5rem;
                border-radius: .5rem;
                border: 1px solid #34495e;
                font-size: 1.6rem;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

                &:focus {
                    outline: 1px solid #34495e;
                }
            }

            & .subject-input {
                flex-direction: row;
                gap: .5rem;

                & input {
                    flex-grow: 1;
                }

                & button {
                    padding: .5rem 2rem;
                    font-size: 1.6rem;
                }
            }

            & ul {
                text-align: center;
                margin: 1rem 0;
                border: #34495e .3rem solid;
                border-radius: .5rem;

                & li {
                    color: #34495e;
                    padding: .5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    & button {
                        background-color: rgb(114, 0, 0);
                        padding: .5rem 1rem;
                        border-radius: .5rem;
                        font-size: 1.2rem;

                        &:hover {
                            background-color: rgb(160, 0, 0);
                        }
                    }
                }
            }
        }

        & .documentacion {
            flex-direction: row;
            gap: .5rem;
            align-items: center;

            & label {
                padding: 0 0 .1rem;
                margin: 0;
                text-transform: capitalize;
            }

            & input {
                accent-color: #34495e;
                border: none;
                outline: none;
            }
        }


    }
}

.teacher-list {

    margin: 2rem 0;
    overflow-x: auto;

    & table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 2rem;
        border: .5rem solid #34495e;
        
        & thead {
            background-color: #34495e;
            color: white;
        }

        & th, & td {
            padding: 1rem;
            text-align: center;
        }
        
    }

}
</style>