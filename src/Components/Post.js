import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Comments } from "./Comments";
import { FaAngleRight } from "react-icons/fa";

export const Post = (props) => {
  return (
    <>
      <div className="mainContentContainer mt-4">
        <div className="mainPostContent">
          <nav id="breadcrumb">
            <a class="home" href="https://incoderweb.blogspot.com/">
              Home
            </a>
            <FaAngleRight />
            <a
              class="label"
              href="https://incoderweb.blogspot.com/search/label/CSS%20Modal"
            >
              CSS Modal
            </a>
          </nav>
          <h1 class="postTitle">
            Create a currency converter using Javascript and API
          </h1>
          <div class="entry-meta">
            <span class="entry-author mi">
              <span class="by sp">by</span>
              <span class="author-name text-mainColor">Ashutosh Tiwari</span>
            </span>
            <span class="entry-time mi">
              <span class="sp">•</span>
              <time class="published" datetime="2023-04-27T14:04:00+05:30">
                April 27, 2023
              </time>
            </span>
          </div>
          <div className="postImage">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9xidD3xpSJnn_5AtF9Cnzo_0REK0rhqJtIhms4MY_wK3dFj6gMfNACgtSdsXDneVMFLh_oBXOezwgreW5rNC2EAJoxewmsh_mM2chJRUd7Csk_9YNKs-iF7ASHMLgto-IOzATbYK6OBsACgw165k0j03BxlRwKXqBqY55LPPSzAegNcv0SX5ivkB4sw/s16000/Currency%20Converter%20-%20InCoderWeb.png" alt="" />
          </div>
          <div className="postBody">
            <a href="#">Lorem ipsum dolor</a> sit amet consectetur, adipisicing elit. Hic, laborum magni. Laborum iure dolorum tempora quo, obcaecati quia a soluta sunt expedita incidunt fuga. Quos quas distinctio, esse id voluptates earum beatae labore assumenda ab vel numquam ut sunt fugit suscipit dicta quis qui quod mollitia iusto ratione. Inventore sapiente eos, consequuntur dolorem fuga sint officia neque? Temporibus fugiat illum minima autem tempora quisquam quasi distinctio, sed dicta beatae nisi culpa, repellendus doloremque pariatur placeat totam fuga iste nulla mollitia voluptates earum ipsum corporis. Eos repellendus repudiandae cupiditate, sint qui facilis porro at odio, beatae quo asperiores assumenda similique quis reiciendis molestiae illum sed hic, voluptatum aliquam? Exercitationem tempora iure eveniet veniam inventore qui amet labore illo ab aperiam omnis blanditiis quaerat minus ipsam sequi nemo, dolores soluta perspiciatis atque odio, at adipisci. Deleniti provident quasi consectetur non. Voluptatum nemo velit officiis omnis sunt quam corporis harum. Cumque amet rem doloribus dignissimos? Totam officia, numquam eveniet maxime quas repellendus. Minima, repellat quo odit cumque porro corrupti temporibus culpa officia quidem adipisci quia reiciendis autem animi sed neque, quibusdam sint aut voluptatibus ducimus aspernatur distinctio optio maxime ratione incidunt? Maiores voluptatem adipisci nihil et fuga? Quam totam sit, fuga laudantium sapiente assumenda perferendis doloribus ab esse recusandae enim maxime sequi animi voluptates sed laboriosam tempore consequuntur tempora adipisci. Distinctio et nihil labore facere deserunt pariatur nemo aspernatur dolorum, culpa iusto perspiciatis quam nulla minima, consectetur veniam voluptatum doloremque. Ducimus nostrum magni impedit alias nobis vero accusantium sapiente voluptate! In quam sed exercitationem at cum, veniam magni veritatis libero nam molestias praesentium. Dolorem consequatur error veniam expedita fugit. Esse blanditiis quo repellendus voluptatum eveniet tempora, ducimus quos asperiores provident illo minus pariatur quod non illum doloribus laborum consectetur quis fuga sunt ad eaque aspernatur? Molestiae ab, alias in eligendi obcaecati voluptate reprehenderit consectetur deserunt quidem ipsum quisquam, magnam porro! Iusto, ex qui natus veniam dolorem facilis! Distinctio magni corporis voluptas, quis quidem totam? Repellat ipsam, illo doloribus dolorem praesentium omnis iste magnam incidunt delectus tenetur minima optio eaque obcaecati in asperiores facilis laboriosam deserunt esse consequatur numquam similique? Expedita inventore delectus ipsa est enim explicabo repellendus. Delectus, labore? Rem aliquid ut commodi quas numquam possimus dolor blanditiis voluptates officiis a eum iusto itaque minima, accusamus, sapiente quis deleniti quasi tenetur quam perspiciatis alias. Ut voluptatem ullam nisi sint perferendis ipsa in pariatur cum odio asperiores! Debitis voluptatibus, quo corrupti odit ab illum fuga eligendi doloribus sint ex natus consectetur labore voluptatum doloremque, ducimus beatae. Molestiae odio quasi quia ex dicta? Veniam esse tempore sapiente voluptatibus, expedita debitis ipsum animi accusantium, labore ab tempora nostrum at! Dolore nam quidem, suscipit soluta quod odio sint incidunt repudiandae at quisquam blanditiis ipsam porro dolorum fugiat beatae alias facilis fuga dolor iusto. Magnam iste saepe rem labore nemo impedit voluptate eveniet ratione, non asperiores enim corporis laborum voluptas similique provident voluptatem, dolorum, quia voluptatum nihil ut doloremque necessitatibus dolor? Officia laboriosam repudiandae unde eaque voluptas nemo illo eum natus, repellendus nihil animi sunt molestiae! Cupiditate consectetur reprehenderit numquam est dicta, quis molestias. Eligendi sapiente impedit, nesciunt deleniti iure aperiam tempore quisquam amet perferendis est quod voluptatem veritatis et recusandae. Laudantium, natus laboriosam. Praesentium molestias expedita nam ullam omnis repellat repellendus odit eum harum commodi laborum sequi, molestiae veritatis, dignissimos sed, voluptatibus qui rem blanditiis autem. Aut laborum laudantium dolor. Corporis, commodi? Harum blanditiis quidem accusantium excepturi eligendi facilis magnam laborum sint, illum ab, quia, minus at nobis maiores aperiam id eos explicabo. Sit, praesentium adipisci eaque accusantium necessitatibus voluptas illo ipsum, repellat illum suscipit commodi consequuntur iusto beatae? Magni, minima, excepturi dolore nulla velit explicabo cumque harum deserunt deleniti molestiae porro similique dolorum perferendis exercitationem consequatur ea aliquid quae! Numquam, et qui! Adipisci consequatur repellendus assumenda officiis eius. Voluptate et neque temporibus, quidem dolores molestiae aspernatur aliquid nulla esse amet nam omnis maxime nobis tempore, iure laborum quibusdam in porro! Doloremque quidem sit nemo aliquam modi impedit optio. Beatae, repudiandae corporis quia expedita illum aperiam a officiis earum autem inventore consequatur rem, omnis magnam voluptatum vel officia pariatur. Similique laudantium neque debitis blanditiis. Quo repellendus vero, quos quas enim in numquam obcaecati. Enim, modi quis ea consequuntur distinctio vitae iste itaque. Blanditiis nobis fugiat, porro veritatis est harum libero esse modi iure doloremque molestiae laboriosam consectetur reprehenderit. Accusamus ipsum voluptate omnis aliquid obcaecati eveniet eaque, in error necessitatibus fugit ducimus deleniti voluptatibus laudantium architecto? Vel harum, atque qui blanditiis cum velit asperiores aspernatur a rerum assumenda minima quas ea nobis id voluptates dolor eius totam esse commodi nihil doloribus animi laudantium? Magni libero tenetur maiores nulla totam, error quisquam facilis consequuntur iusto fugit, corporis nihil adipisci quam repudiandae aut! Similique maxime officia ea, assumenda fugit odit porro laborum debitis voluptatem aperiam magnam alias, a obcaecati pariatur, ex iure eaque consequuntur. At repudiandae delectus et numquam error similique commodi illum. Explicabo veniam praesentium enim reprehenderit perferendis. Consequatur laborum impedit delectus rem dolor, corporis mollitia ab rerum sapiente commodi. Alias in eum atque deserunt deleniti veritatis voluptates ipsum ducimus ut! Non, expedita odit quod exercitationem ipsam tempore quasi labore sit natus corporis accusantium nihil. Debitis sunt, alias autem quibusdam rerum expedita minima error cumque! Veniam nihil minima ducimus sequi. Quae quis beatae voluptas voluptatibus inventore veniam? Repellendus nulla, illum recusandae cumque eligendi unde repellat quod similique mollitia tempore dolorum vel ipsum corrupti voluptates suscipit dignissimos officiis at? Quos, culpa veritatis? Sed, obcaecati! Architecto quaerat natus explicabo itaque nihil maiores enim! Iusto natus tempore rerum sequi ad, dolorem illo autem voluptatem obcaecati amet cum odit accusantium voluptas magnam quam harum exercitationem non officiis ratione suscipit! Itaque dicta odio unde quisquam ea totam quae voluptate doloremque rem sunt repellendus inventore ipsa iste nemo ab repudiandae sequi sit asperiores quasi, numquam optio. Debitis cupiditate quam neque id doloremque temporibus nam, quae fugit! Magnam non maiores quisquam! Deserunt cupiditate minima accusantium consectetur possimus molestias cumque minus magnam perferendis obcaecati. Vero, repellat. Quisquam quia debitis odit consequatur fugit optio itaque voluptates voluptatem architecto! Delectus quae, possimus cupiditate cum ab, reprehenderit porro provident tempora quaerat, voluptas officiis ad! Eaque nesciunt atque asperiores illo? Possimus nisi enim tempora est, quisquam accusantium incidunt. Accusamus aliquam repudiandae deserunt, aut modi at necessitatibus nobis excepturi debitis iste beatae tenetur sit ut reiciendis voluptates obcaecati temporibus saepe impedit, quidem nulla repellat? Ex aspernatur quaerat cum accusamus harum facilis hic autem corporis deserunt animi! Illum placeat veniam tenetur sequi distinctio, totam esse sapiente odio minima reprehenderit labore illo porro debitis harum odit? Magni cum perferendis, incidunt rem architecto inventore quis odit possimus labore explicabo delectus nostrum sunt sint temporibus provident blanditiis iste iusto illo necessitatibus quos, unde corporis doloremque debitis corrupti? Consequatur minus sunt tempora dolorem. Ea repudiandae quis architecto vitae quaerat praesentium illum ipsum dignissimos, amet ratione cum exercitationem nihil? Asperiores esse velit voluptas sequi sint pariatur autem suscipit quam, quaerat, neque nam odio cupiditate maxime. Ducimus similique quia facere est ex, commodi necessitatibus sunt, quos fugiat, itaque enim in rem nemo accusamus ratione maiores quibusdam harum voluptas voluptate magni. Magni quas vitae eius aperiam tempore odit obcaecati similique ratione enim eaque, quis omnis blanditiis libero nihil, facere impedit exercitationem porro! Id tempore aut ducimus, beatae reiciendis, possimus nesciunt dolorem iure eligendi dolore, tempora quibusdam suscipit quasi consequuntur dolor! Eligendi, nesciunt tempore ipsa accusamus, nobis vero iusto illo molestiae consequatur obcaecati corporis veniam distinctio reprehenderit totam corrupti similique ipsam? Quam dolorem officia animi, quidem mollitia error quaerat velit esse recusandae quas. Voluptas voluptates quis id sint asperiores hic saepe dicta est? Consectetur tempora distinctio, iusto consequuntur, excepturi repellat labore molestias aperiam suscipit minima explicabo molestiae error eius sapiente eveniet sint, odit assumenda commodi repellendus? Harum at nesciunt quibusdam velit dolore commodi dolor eaque laudantium, id, perferendis animi sed quasi dolorum culpa officiis tempora. Veritatis distinctio perspiciatis enim, dolore incidunt impedit ab temporibus iusto doloremque quaerat libero. Dolor quis temporibus, numquam officia dicta quasi deserunt ipsam perferendis laboriosam in commodi aspernatur voluptate incidunt provident corrupti cupiditate nulla perspiciatis minus fugit optio aut. Voluptatum est voluptas quidem a id vitae aut, ab, consectetur porro assumenda iste repellat aperiam nam? Hic excepturi saepe sapiente cumque? Aliquam, omnis, eos minima quasi, cupiditate sequi unde illo illum delectus impedit sapiente. Vero, dolorem placeat. Impedit non laborum animi officia ipsam? Libero, id fuga voluptate nulla laboriosam iure tenetur nesciunt repellat quam assumenda eius odit, illum deserunt architecto quia! Quod quibusdam saepe aliquam officiis et eligendi expedita nulla qui sunt totam eius, suscipit consequatur cumque quam molestias, nisi ea ratione fuga vero. Architecto soluta exercitationem veniam libero quibusdam consequuntur harum natus corrupti eligendi incidunt consectetur reiciendis molestiae iste, dolor in omnis? Consequuntur quibusdam, laudantium repellendus debitis reprehenderit earum optio eveniet repudiandae similique aliquid in voluptatum quaerat cum laboriosam animi ab quia consequatur quis veniam atque voluptatibus amet. Autem neque facere sint ipsam animi possimus consequuntur corporis, dolorum eius, error sequi vitae. Eos ullam enim dicta porro culpa at perferendis possimus ut, perspiciatis tenetur impedit ipsa cum a quasi libero sint, nobis aspernatur quibusdam corporis mollitia ratione. Nemo, doloremque labore eos saepe quae modi aperiam! Similique odio exercitationem quis quibusdam fuga impedit voluptatibus iure atque deserunt, autem error natus laboriosam animi quidem rerum beatae obcaecati amet, dolorum quia labore odit assumenda dolores ullam. Dicta expedita error nihil impedit, cupiditate quo aliquid quaerat cumque nisi rem dolorum reiciendis, tenetur iusto! Neque distinctio, ab reiciendis accusantium asperiores quos modi, officia doloribus, doloremque quo dolor vitae officiis ex? Quo eligendi aut consequatur hic ut dolor corporis nulla odio exercitationem temporibus id, unde officiis velit dicta, officia perferendis debitis eos magni eum, reiciendis laborum sapiente cupiditate mollitia. Perferendis earum, deserunt quis consectetur voluptate aspernatur nobis voluptatibus doloribus quos adipisci exercitationem sapiente officiis laudantium iure laboriosam obcaecati suscipit doloremque blanditiis corrupti nisi eligendi corporis. Eius temporibus voluptatibus sunt, voluptates perspiciatis corrupti facere, exercitationem neque obcaecati aliquam dolores explicabo? Nisi eligendi dolore ducimus facilis molestiae facere tempora! Quisquam inventore cumque, eum molestiae velit dicta debitis, numquam nesciunt eveniet quia rem corporis iusto ea voluptatibus perspiciatis esse officiis, culpa consequuntur qui reprehenderit sunt quis voluptate quas dolorem. Impedit atque illum sequi inventore aut incidunt odio assumenda suscipit explicabo iste. Veniam eaque aperiam quibusdam suscipit officiis et minus consequuntur, ea qui enim sit, alias nemo dignissimos similique assumenda voluptate repudiandae? Molestias, fuga amet harum, praesentium dolores nulla aperiam tenetur adipisci, iste fugiat cumque libero sint illo vero magnam voluptate porro laborum debitis? Eveniet dolorem illo magnam at adipisci, quod a repellat modi ex amet numquam ullam voluptatibus, deserunt, tenetur vel perferendis! Velit inventore modi eligendi recusandae aperiam nisi et, exercitationem praesentium repellat ad eius accusantium. Delectus laborum culpa facilis saepe ullam, iste fuga optio quas quos adipisci nulla id nihil, suscipit consequatur sequi voluptatibus ipsam aspernatur a. Quaerat optio aut libero vero porro fugit, hic numquam iusto voluptate itaque voluptatum ipsa iure? Expedita dolore, vero fugiat dicta quas distinctio magni vitae numquam ducimus, consequatur minus ab dolorum esse accusantium recusandae doloremque ipsam eum explicabo molestiae harum impedit delectus! Deserunt voluptatibus voluptate, saepe labore ducimus non, eligendi esse adipisci pariatur eaque ab velit quibusdam autem, a odit exercitationem. Alias a similique voluptates quas libero inventore possimus architecto nisi magni cupiditate tempore sint ipsum porro facere animi, maiores dignissimos pariatur, deleniti voluptatem reiciendis quam ratione accusantium earum! Recusandae aliquam velit quasi, obcaecati doloribus repellendus fuga neque perspiciatis! Deserunt modi voluptatum tempora ipsam consequuntur cumque quam obcaecati harum labore, libero autem reiciendis molestiae maiores consequatur animi cum numquam dolorum ex facere velit. Porro impedit debitis dolorum veniam perspiciatis cum, atque nisi provident voluptate fugit. Consequatur omnis, quisquam recusandae porro exercitationem deleniti aspernatur fugit doloremque, eos veniam temporibus optio ab. Soluta amet excepturi, in quibusdam distinctio quo rerum. Alias nemo minus atque officia ipsam illo. Itaque commodi doloremque totam numquam. Fugit quae, atque doloremque praesentium corrupti reprehenderit. Omnis, ipsum nobis! Provident exercitationem minima magnam, temporibus eligendi deleniti nulla iste aspernatur omnis laboriosam sed nam mollitia ut in commodi libero animi facilis reiciendis quae saepe ipsam pariatur id! Culpa odit voluptatibus unde iusto beatae quibusdam ratione laborum, nobis quis maiores, natus est minima harum dolores dicta ipsa nam accusamus ullam.
          </div>
          <Comments/>
        </div>
        <Sidebar />
      </div>
    </>
  );
};
