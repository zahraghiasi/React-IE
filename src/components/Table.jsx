import {useLayoutEffect, useState} from "react";

export default function Table({data}) {
    const [stars, setStars] = useState([]);

    useLayoutEffect(() => {
        const storedStars = JSON.parse(localStorage.getItem('stars') || '[]');
        setStars(storedStars);
    }, []);

    function toggleRow(id) {
        const storedStars = JSON.parse(localStorage.getItem('stars') || '[]');
        const index = storedStars.findIndex(item => item === id);
        console.log(index)
        if (index >= 0) {
            storedStars.splice(index, 1);
        }else {
            storedStars.push(id);
        }
        setStars([...storedStars]);
        localStorage.setItem('stars', JSON.stringify(storedStars));
    }
    return(
        <>
            <table className="mx-auto">
                <thead>
                <tr>
                    <th className="border">نام تغییر دهنده</th>
                    <th className="border">تاریخ</th>
                    <th className="border">نام آگهی</th>
                    <th className="border">فیلد</th>
                    <th className="border">مقدار قدیمی</th>
                    <th className="border">مقدار جدید</th>
                </tr>
                </thead>
                {data.map(item =>
                    <tbody className={stars.includes(item.id) ? 'bg-orange-200' : ''} key={item.id} onClick={() => toggleRow(item.id)}>
                    <tr className="border cursor-pointer">
                        <td className="border">
                            {item.name}
                        </td>
                        <td className="border">
                            {item.date}
                        </td>
                        <td className="border">
                            {item.title}
                        </td>
                        <td className="border">
                            {item.field}
                        </td>
                        <td className="border">
                            {item.old_value}
                        </td>
                        <td className="border">
                            {item.new_value}
                        </td>
                    </tr>
                    </tbody>
                    )}
            </table>
        </>
    );
}