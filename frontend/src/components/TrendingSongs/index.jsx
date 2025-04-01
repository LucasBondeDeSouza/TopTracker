import React, { useEffect, useState } from "react";
import { fetchTrackByGenre } from "../../SpotifyDB";
import CategorySection from "../CategorySection";
import SkeletonCategoryCard from "../SkeletonCategoryCard";

export default ({ token }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [popTracks, setPopTracks] = useState([]);
    const [sertanejoTracks, setSertanejoTracks] = useState([]);
    const [funkTracks, setFunkTracks] = useState([]);
    const [rockTracks, setRockTracks] = useState([]);
    const [kpopTracks, setKpopTracks] = useState([]);
    const [pagodeTracks, setPagodeTracks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setPopTracks(await fetchTrackByGenre(token, 'pop', 'US'));
            setSertanejoTracks(await fetchTrackByGenre(token, 'sertanejo', 'BR'));
            setFunkTracks(await fetchTrackByGenre(token, 'funk', 'BR'));
            setRockTracks(await fetchTrackByGenre(token, 'rock', 'BR'));
            setKpopTracks(await fetchTrackByGenre(token, 'k-pop', ''));
            setPagodeTracks(await fetchTrackByGenre(token, 'pagode', 'BR'));
            setIsLoading(false)
        };
        fetchData();
    }, [token]);

    return (
        <>
            {isLoading ? <SkeletonCategoryCard size={'lg'} /> : <CategorySection title={'Top Pop Songs'} data={popTracks} size={'lg'} />}
            {isLoading ? <SkeletonCategoryCard size={'lg'} /> : <CategorySection title={'Top Sertanejo Songs'} data={sertanejoTracks} size={'lg'} />}
            {isLoading ? <SkeletonCategoryCard size={'lg'} /> : <CategorySection title={'Top Funk Songs'} data={funkTracks} size={'lg'} />}
            {isLoading ? <SkeletonCategoryCard size={'lg'} /> : <CategorySection title={'Top Rock Songs'} data={rockTracks} size={'lg'} />}
            {isLoading ? <SkeletonCategoryCard size={'lg'} /> : <CategorySection title={'Top K-Pop Songs'} data={kpopTracks} size={'lg'} />}
            {isLoading ? <SkeletonCategoryCard size={'lg'} /> : <CategorySection title={'Top Pagode Songs'} data={pagodeTracks} size={'lg'} />}
        </>
    );
};
