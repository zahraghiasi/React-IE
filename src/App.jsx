import './index.css';
import Table from "./components/Table";
import {useLayoutEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Button from '././components/Button'
import Inputs from "./components/Inputs";
import Sort from "./components/Sort";

function App() {
    const [data, setData] = useState([]);
    const rawData = useRef([]);
    const sortField = useRef('');
    const filters = useRef({
        name: "",
        date: "",
        title: "",
        field: ""
    })
    const allDataLength = useRef(data.length);
    const pathname = useLocation().pathname;
    const pathNumber = pathname[1] === undefined ? 1 : parseInt(pathname[1]);
    const navigator = useNavigate();

    useLayoutEffect(() => {
        function spliceData(d) {
            const start = (pathNumber - 1) * 20;
            return d.slice(start, 20 + start);
        }

        fetch('/data.json').then(res => {
            res.json().then(d => {
                allDataLength.current = d.length;
                const spliced = spliceData(d);
                rawData.current = spliced;
                sortField.current !== '' && sortData(spliced, sortField.current);
                setData(spliced);
            })
        })
    }, [pathNumber])

    function nextPage() {
            navigator('/' + (pathNumber + 1));
    }

    function prevPage() {
        navigator('/' + (pathNumber - 1));
    }

    function filter(key, value) {
        filters.current[key] = value;
        let temp = rawData.current;
        let flag = true;
        Object.keys(filters.current).forEach((keyItem) => {
                    if (filters.current[keyItem] !== "") {
                        flag = false;
                        temp = temp.filter(item => item[keyItem].includes(filters.current[keyItem]));
                        setData(temp);
                    }
            }
        )

        flag && setData(rawData.current);

    }

    function sortData(arr, field) {
        if (field === 'selected') {
            return rawData.current;
        }
        sortField.current = field;
        const temp = arr;
        temp.sort((a, b) => a[field].localeCompare(b[field]));
        return temp;
    }

  return (
    <>
        <Inputs onFilter={(key, value) => filter(key, value)}/>
        <Sort onSelect={(field) => setData([...sortData(data, field)])}/>
        <Table data={data}/>
        <div className="flex justify-center">
            {
               (pathNumber * 20 < allDataLength.current) && <Button onClick={nextPage} text="صفحه بعد"/>
            }
            {
                pathNumber > 1 && <Button onClick={prevPage} text="صفحه قبل"/>
            }
        </div>
    </>
  )
}

export default App
