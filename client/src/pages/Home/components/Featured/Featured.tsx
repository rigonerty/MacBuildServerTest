import React from 'react'
import cl from "./Featured.module.scss"
import { FeaturedCard } from '../../../../components/FeaturedCard/FeaturedCard'
export const Featured = () => {
  return (
    <div className={cl.Featured}>
        <p>Featured works</p>
        <div>
            <FeaturedCard img='https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N4XPPxJBpolBdEXET-euW~irtYzVg8pMeAzFJ7t5BBPzzsVE0XjesI8u7kxF7XgIx5zqOVrdrSSdLfxNJolsStjyNlCic8GDsyUcjzsfqwYYb54svlZuLWOB3e6SfhCgIm3n61tyibU4W4TZJtYZO5IkkoIZoQ~Ueq8uRDFZPmbdTANaEt3IhrfFQlzCvyy2aSF9VljmGCDufCoheKGNY2GazznWHz7tvlxQnH9ulaIdFz3itmkFd9MMFfvUfDAK2IuBzl9Un~wF01mX9yUvYZo37VQVoyhk98eSps9~ohvIv3f0Sage3ecRS1Vcq-brPDg2woQymZmiah4olzoFDA__' title='Designing Dashboards' year={2020} description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' type='Dashboard'/>
            <hr/>
            <FeaturedCard img='https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CDx3q3Udbqg7SpSZFQGOP-LvdthBkuJQ1Vw633xqJsRRSUrI1O8412GL19YWFQjsHuSywn3oidZ7tPvXvwLqNgN0rczHZnq1tk8dmBk80gZJgWw18Uat91aBf57ZE6yw31ax-51Z4JxNeNHNMTq0FXJM9cp4kLLZdj2BFaFrbXnETMFDZgkLuzmrLwuzIcNmR5vqD4WebMIvin9YS9~3LxsOiCr-FRC7iyr56ftygrfkmhcH~cce8TqLW3PMYtCh6grOj7-jOlvjVL~LRJ2cyuF1OBjk4iHM2ItBs8j72gPr8QqPK3TSa64rXK5fvA5gGRA07Eb7gb69oEITEkHslw__' title="Vibrant Portraits of 2020" year={2020} type='Illustration' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>
            <hr/>
            <FeaturedCard img='https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gokF6lmIHRnKbj~s8B81Uj29gdzEBaldl4gw2t~hROHDBb~T82gPvzw4rkItWynLhqVhsuKaSyMpCXKFs7N0D5BR6mnmswVilpqfOgWVGbvDRENyuyZPonBEXriH~zAueAm3dMxX~CC~i~os2xLCazLbKnRzzPGZn6kY7RtUwjM23GT19dQZ-MoxioCOLLhPIFnmzzyuuNPHhTx8gY3aKpnmws4qCEr39xqhGFVYa78VdSdj7jvy63VBEMIiVwBrT48G8bgqeiIIX111lmeuitxTF1NVuEdc5iga4Jft--R8m9QRFwflAJ2JGiNK0VlhaFGlXeQH9EhM-9nznqgchg__' title='36 Days of Malayalam type' year={2018} type='Typography' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'/>
            <hr/>            
        </div>
    </div>
  )
}
