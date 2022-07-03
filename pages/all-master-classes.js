import HomeLayout from "../components/HomeLayout";
import MasterClassItem from "../components/Master-Class/master-class-item";
import {useIntl} from "react-intl";
import Pagination from 'rc-pagination';
import {useDispatch, useSelector} from "react-redux";
import {
    setAllMasterClasses,
    setAllMasterClassesLoaded,
    setCurrentPage,
    setTotalMasterClasses
} from "../redux/reducers/master-class";
import api from "../components/axiosAPI/api";
import {useEffect} from "react";


export default function AllMasterClasses() {
    const {formatMessage} = useIntl();
    const dispatch = useDispatch();
    const masterClass = useSelector(state => state.masterClass);


    const fetchAllMasterClasses = async () => {
        dispatch(setAllMasterClassesLoaded(false));
        const {data} = await api.get(`/ru/api/v2/master-classes/?page=${masterClass.currentPage}`);
        dispatch(setTotalMasterClasses(data.total));
        dispatch(setAllMasterClasses(data.results));
        dispatch(setAllMasterClassesLoaded(true));
    }

    useEffect(() => {
        fetchAllMasterClasses();
    }, [masterClass.currentPage]);

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    }

    return (
        <HomeLayout>
            <section id="master-class">
                <div className="container container-2sm md:container mx-auto">
                    <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">Мастер-Класстар</h1>
                    <div className="flex ">
                        <button className="btn3">{formatMessage({"id": "all"})}</button>
                        <div className="ml-2">
                            <button className="btn2">{formatMessage({"id": "progress"})}</button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto gap-6">
                        {masterClass.allMasterClassesIsLoaded ? (
                            masterClass.allMasterClasses.map((elem) => (
                                <MasterClassItem el={elem} key={elem.id} />
                            ))
                        ) : null}
                    </div>
                    <Pagination
                        total={masterClass.totalMasterClasses}
                        pageSize={7}
                        current={masterClass.currentPage}
                        onChange={handlePageChange}
                    />
                </div>
            </section>
        </HomeLayout>
    )
}