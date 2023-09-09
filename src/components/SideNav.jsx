import React from "react";
import { ArrowUp, ArrowLeft, MarketIcon, NetworkIcon, GovIcon, IBCIcon, DevIcon, HeartBeatIcon, DominanceIcon, JourneyIcon, ValidatorsIcon, NoticeIcon, BlogIcon, ApplicationsIcon, ReleaseNotesIcon } from "../assets/Icons";

const SideNav = () => {
  return (
    <>
      <div>
        <div className="fixed flex w-[251px] flex-col justify-between border-r-[1px] border-[#282a32] bg-[#161821]">
          <div>
            <div className="p-2 pt-3">
              <div className="mb-1 flex cursor-pointer items-center justify-between px-3 py-[13px] text-[#8d98a5] transition duration-150 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:text-[#dde0e4] hover:ease-in">
                <div className="text-[14px] font-semibold">EXPLORER</div>
                <div>
                  <ArrowUp />
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">ANALYTICS</div>
                  <div>
                    <ArrowUp />
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <MarketIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Market
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <NetworkIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Network
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <GovIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Governance
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">
                    VISUALIZATIONS
                  </div>
                  <div>
                    <ArrowUp />
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <IBCIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    IBC Network
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <DevIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Dev Activity
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <HeartBeatIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Heartbeat
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <DominanceIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Dominance
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <JourneyIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Journey
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <ValidatorsIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Validators
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">INFORMATION</div>
                  <div>
                    <ArrowUp />
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <NoticeIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Notice
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <BlogIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Blog
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <ApplicationsIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Applications
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <ReleaseNotesIcon />
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Release Note
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[52px] w-full items-center justify-end border-t-[1px] border-[#282a32]">
            <ArrowLeft />
          </div>
        </div>
        <div className="ml-[252px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          voluptatem eos sit assumenda consequuntur aut iusto exercitationem
          deserunt eaque magnam itaque voluptates laboriosam. Ipsa vero nobis,
          rerum quia error minima aliquam recusandae a? Repellendus cumque, eos
          quos porro quisquam dicta aliquam tempore quaerat consequatur non at
          earum facere quo aliquid? Fugiat sit similique ipsam magnam laboriosam
          quas nesciunt vitae consequuntur accusamus molestias amet voluptatem
          totam perferendis exercitationem iure, nisi autem cum rem? Odio optio
          amet mollitia facere, aperiam natus? Ipsum iusto odit earum
          reiciendis, tenetur sunt illo eius deserunt ducimus nesciunt deleniti
          porro aliquid consectetur adipisci esse doloribus quo nemo voluptatem
          officia qui? Autem unde voluptates aspernatur neque ratione. Iure
          ipsum maxime itaque voluptatibus vitae, nemo sit amet magnam corporis
          officiis accusamus consequatur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, perferendis cum? Esse sint natus eveniet, enim magnam perspiciatis inventore est reiciendis porro facilis itaque omnis sunt alias id suscipit incidunt modi impedit placeat nobis! Quibusdam voluptates consequuntur architecto maiores, nostrum temporibus nesciunt, ipsam delectus officia debitis, praesentium quasi harum perspiciatis nemo nobis cumque nihil corrupti commodi repellendus eum tenetur et quam. Quia iure debitis tempora a blanditiis, nulla architecto eligendi, voluptatibus libero corrupti hic doloremque quo. Ipsa velit, fuga similique, aperiam adipisci doloribus consequatur consequuntur modi aliquam dignissimos voluptas facere quod magni, eius iste tempore quam dolore eveniet nam ex a nisi quia unde dicta! Itaque, aut vel omnis provident odit quas dolore eum error nobis quidem doloribus necessitatibus voluptates excepturi incidunt ex, eos sequi. Architecto ratione accusamus recusandae, quod sequi facilis saepe animi sint velit, possimus ad dignissimos corporis sit id deleniti aspernatur doloribus voluptas. Nobis, quos ipsam? Odio repudiandae doloremque aperiam eius. Voluptatum, cum obcaecati! Repudiandae facere ex voluptatem id natus itaque impedit labore dolores placeat numquam molestiae accusamus dolorum quod iure dolor enim vitae dolore reiciendis cupiditate saepe, consectetur rerum? Consectetur ipsa quidem incidunt totam officiis quod rerum optio. Earum, laboriosam quos delectus facere dolor cum? Officiis hic quasi fuga nam unde illum dignissimos dolor aliquam! Aliquam, consectetur inventore ratione corporis hic velit voluptate ad quos, quisquam a excepturi cum numquam exercitationem error et nobis asperiores. Repellat culpa illum, alias, perferendis magni vitae distinctio soluta dolores voluptatibus error cupiditate earum officiis odio expedita tenetur recusandae, nam vero. Veniam porro vitae reprehenderit ratione debitis aliquid deserunt illo et alias eum est, officiis repellat temporibus nihil laboriosam ipsa eveniet at laudantium quisquam facilis non eius eos hic assumenda. Minus veritatis commodi eligendi debitis laudantium facilis soluta, perspiciatis aliquid libero inventore similique quo recusandae ducimus modi iure fugiat placeat beatae praesentium rerum magnam iusto aspernatur sunt quas in. Vel, exercitationem! Ea, officiis quibusdam impedit natus praesentium architecto amet. Aspernatur ipsam eveniet esse recusandae quibusdam. Non, aliquam voluptatem? Aspernatur non cumque, ratione harum iusto voluptas saepe a ipsam voluptate consequatur voluptatem quasi amet obcaecati iste, deleniti vitae quia sapiente omnis natus rerum reiciendis nemo aliquid. Illo labore quam nemo repellendus impedit eligendi suscipit non quos. Culpa voluptatem mollitia est labore ipsum dicta eum facere sit rem perspiciatis voluptates architecto sunt quos nostrum qui, illum a pariatur molestias atque natus repellat illo ex. Minus qui facilis placeat. Reprehenderit quia accusamus dicta cum. Repudiandae non minus porro natus rerum deserunt atque reprehenderit, tempore officia nesciunt, distinctio nostrum similique nihil, quia commodi alias autem sit dolor quam. Repellendus nemo mollitia, ipsa quas laborum harum quia obcaecati assumenda cumque aspernatur unde consectetur, eaque voluptas facere incidunt fugiat ea repellat omnis est sunt nam optio rerum illo? Odit, esse. Velit minus culpa et, sit dolores numquam cupiditate natus fugit molestiae quasi inventore totam autem. Accusantium provident maxime porro expedita alias exercitationem ipsa dolor sit repudiandae, consectetur deserunt, explicabo aliquam eligendi? Ea laudantium officiis magni molestias pariatur nihil explicabo corporis vel atque quibusdam accusamus architecto, asperiores, nisi magnam quisquam voluptas earum ab repellendus a hic nam odit nesciunt? Alias molestias doloribus sequi aliquam! Dolores incidunt, autem repellat ratione aperiam nostrum soluta ducimus ullam consectetur sit. Maiores consequuntur, modi quasi incidunt atque, possimus illo quaerat sit blanditiis tempora aut, reprehenderit minus unde tempore quae? Consequatur dignissimos ipsam molestias hic velit iste blanditiis error qui ut minus rerum, eaque mollitia fugit voluptatum itaque veritatis consectetur beatae recusandae nesciunt laboriosam cum quo obcaecati voluptates odio. Delectus, nisi quo vero quaerat consequuntur consequatur at provident tempora ullam earum cupiditate nihil. Commodi, tenetur cumque! Ullam nam ea ab dignissimos neque hic! Nulla ipsam eum laudantium tempore optio recusandae consequuntur quibusdam unde maxime voluptatibus veniam aperiam error illum minus provident similique, doloremque iusto quod facilis dolorum, voluptas rerum earum excepturi. Repellat, inventore quos quasi veritatis dolores quia autem, blanditiis reprehenderit maiores et fugiat provident esse doloremque fuga corporis officiis tempora ipsum natus error omnis! Fugit libero eveniet exercitationem eaque iure asperiores dolorem labore amet natus quae, velit, unde dicta, iusto modi. Accusamus voluptatum, tenetur repudiandae libero eligendi repellendus nesciunt minima enim sequi adipisci repellat hic quidem facere corporis provident suscipit quos et omnis. Illum animi maxime rem eum eligendi minus officiis molestiae quo corrupti quidem? Ab temporibus ipsum rem et harum repellendus nemo sed cupiditate eligendi reiciendis dolorem tempore inventore molestias dolorum natus, repudiandae alias esse perferendis eaque. Voluptas voluptates esse dolorem voluptatem, hic facilis, mollitia dignissimos, corrupti fuga obcaecati nesciunt. Suscipit tempore sit quibusdam totam voluptate nisi molestias iure veniam esse labore culpa soluta voluptatibus aut unde architecto tenetur iste saepe perferendis, neque nam reiciendis ratione! Consequatur veritatis doloremque saepe nisi esse ipsam molestiae dolorem voluptatibus odio consequuntur assumenda voluptatem distinctio consectetur modi incidunt corporis ipsa vitae, tempore possimus minus cupiditate ab sed! Adipisci nihil perferendis nisi et vitae maiores possimus incidunt. Totam, natus quam velit blanditiis nihil optio adipisci dicta reiciendis dolores odio animi, itaque sequi quo debitis nam. Odit corrupti magni illum, iusto deserunt iure commodi. Mollitia, modi quis inventore asperiores optio assumenda eos corporis nisi consequatur voluptatibus. Obcaecati voluptatem dolore voluptatum, quisquam sapiente magni magnam nesciunt laudantium, pariatur nulla dolores beatae! Asperiores quas voluptate, nesciunt iusto maiores veniam aliquid quae dignissimos voluptatum laborum quo nam doloremque dolores alias provident ullam architecto? Temporibus esse inventore consequuntur id in excepturi sunt facere quis dolorem fugiat doloremque ratione, neque eaque repellat mollitia odit accusamus labore architecto quisquam! Assumenda necessitatibus beatae et doloribus culpa hic atque quis est voluptatem nihil sequi iusto reiciendis obcaecati inventore natus, exercitationem expedita aliquam a odio minus, ratione aliquid ea laborum! Tempora molestias quasi atque quae architecto facilis iste commodi tempore possimus obcaecati, sit nostrum officiis? Deleniti, explicabo voluptate saepe recusandae eaque blanditiis itaque. Illo autem, doloremque quidem a voluptatibus voluptates maiores nemo facilis sunt reiciendis magnam, consectetur aliquid. Atque dolorum magnam voluptate unde veniam quaerat! Blanditiis eius, alias unde consequatur sed cumque necessitatibus, iusto voluptates ipsam porro voluptatem at qui minus corrupti recusandae tenetur repudiandae! Odit excepturi qui officia sit eaque, hic repudiandae eum fugiat accusantium totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste doloremque corporis recusandae laborum praesentium exercitationem cum animi quia rerum? Itaque cumque culpa commodi error officia corporis asperiores perferendis rerum ipsum neque repudiandae sequi quia tempora consequuntur consectetur sit id eveniet ipsa, dolore debitis modi natus. Iste, vero! Laboriosam, dicta voluptas. Esse, vitae temporibus fugiat blanditiis molestias mollitia enim alias quia voluptas, nam accusantium reprehenderit labore delectus corrupti fuga aut qui omnis obcaecati placeat sed accusamus, molestiae tempora quibusdam reiciendis? Iure inventore similique molestiae distinctio vel laboriosam quos a veniam esse labore? Non itaque placeat ab totam debitis magnam dolores, soluta voluptatem consequuntur excepturi doloribus culpa vitae molestiae libero earum odit. Distinctio, consequuntur aut eveniet officia sed rerum in neque rem, cumque expedita error explicabo ullam corrupti praesentium quidem dolore adipisci. Perferendis perspiciatis quidem aspernatur veritatis assumenda in itaque voluptatum inventore nulla, iure non magni reprehenderit corporis autem animi! Quasi nisi illum praesentium amet repudiandae at officia suscipit cumque reiciendis, provident, tempore labore dolorum totam voluptatem! Ad fugiat, quisquam nam mollitia odit ipsum nihil deserunt, repellat culpa natus omnis molestias ab doloremque quibusdam aperiam enim labore, nulla porro aliquam eligendi. Assumenda ipsum molestiae voluptatum reprehenderit veniam quisquam aperiam exercitationem doloremque voluptates dolorum, quae cupiditate tempore dolores minima cumque accusantium dolor perferendis quaerat illum tenetur iure nobis? Totam modi at nisi earum sapiente maxime unde provident iusto reprehenderit? Quas aliquid sunt optio exercitationem, cupiditate ipsa facere ab suscipit est mollitia molestiae, similique at omnis qui totam repudiandae veritatis perspiciatis saepe maxime quod. Veniam, delectus magnam. Quibusdam quaerat natus amet similique? Facilis maiores saepe quo voluptatum, modi delectus. Minus sunt dicta eum sint enim. Neque nostrum voluptatem, laborum obcaecati dolorem aperiam asperiores repellat placeat ullam quaerat a qui? Est cum omnis officia ad sint velit quaerat, ipsa quod, ipsum eligendi minima similique placeat perferendis tempore fugit sequi nam quos natus, a sit. Asperiores eveniet molestias cupiditate quisquam unde iure aliquid dolor nulla laudantium. Labore, placeat officia magnam, possimus quas, repellendus aperiam nihil nam laudantium soluta iste. Eius provident omnis veniam facilis fugit illo enim odio illum, laboriosam, laudantium nulla cumque earum quibusdam deleniti ex veritatis, aliquam suscipit quisquam debitis perspiciatis minima tenetur! Incidunt culpa, autem possimus reiciendis cumque impedit praesentium laudantium deleniti. Voluptate rem quibusdam molestias exercitationem facere vero atque ullam optio porro enim repellat quis iste consectetur cupiditate accusamus illum fuga, ex facilis nam dolores deserunt animi! Cupiditate facilis laudantium tenetur asperiores aut cum quasi iste possimus, natus culpa quos corporis ratione dicta quod minima autem minus quam ullam quaerat sapiente, cumque, fuga temporibus veniam! Et dolor dolorum molestiae ducimus tenetur, error, ut explicabo modi, obcaecati reprehenderit accusantium impedit beatae. Eius ab deserunt, nam soluta ratione provident, nobis minima laboriosam enim aliquid nihil! Dicta ipsum beatae autem iure? Deleniti facilis vero odit aut nobis doloremque, ea inventore mollitia neque assumenda officia similique doloribus esse quod, corporis a quas velit tempore necessitatibus. Aliquam amet accusamus enim rerum cum voluptatem fugit quas asperiores esse nihil, laudantium voluptas suscipit, minus quo iure possimus? Itaque odio soluta sed iusto facere, doloremque nulla tenetur possimus ad animi sequi asperiores accusantium accusamus exercitationem ipsum id! Dolorum quidem obcaecati quae, aliquid exercitationem eum, alias maxime non cupiditate deleniti temporibus provident debitis? Deserunt, eligendi quo. Provident, velit. Unde rem soluta mollitia, tempora aut temporibus odio cumque sapiente quaerat similique illum provident odit nam nesciunt optio cupiditate vel praesentium. Recusandae, ea. Consequuntur culpa quod ab obcaecati necessitatibus deleniti, id accusantium ullam quisquam fugit voluptas rem dolor voluptates, ipsa veniam natus cumque atque voluptatum odit inventore nobis! Atque quo, minima in minus dolor ad quas est voluptates architecto id dolorum blanditiis facilis reprehenderit repellat hic quasi magnam earum similique sint, corrupti rerum sit. Voluptate aperiam, amet voluptatibus sint unde pariatur. Facilis fugiat vitae enim porro asperiores, tempora cumque quasi sapiente? Molestiae eum molestias, odit delectus repudiandae, architecto accusamus itaque vel, esse aliquam voluptates amet beatae. Reiciendis qui quam, quaerat ratione non quasi voluptatem molestiae nihil earum amet blanditiis, aspernatur in minima exercitationem ab quo, mollitia placeat! Inventore enim dolore eaque commodi, dolores impedit aliquam, quisquam eos laudantium et illo provident. Fugit deleniti amet rem ea laborum, nesciunt assumenda commodi, velit exercitationem beatae quas. Saepe facilis facere minus, atque molestias officiis iure autem magni porro animi earum recusandae cumque quae velit consequuntur magnam possimus deserunt sequi nobis exercitationem asperiores dolorem fugit illo? Culpa deleniti quod consequuntur perferendis, quos magni, ad voluptate sit beatae recusandae quaerat unde magnam numquam delectus eveniet ut corrupti rem illum sapiente inventore! Repudiandae, quasi tempore! Similique exercitationem ut quis ipsa, minus voluptatibus debitis veniam vel natus, itaque voluptate omnis. Ducimus sapiente alias deleniti voluptatum architecto numquam sequi asperiores reiciendis error? Harum adipisci totam fugiat, aperiam nisi ea incidunt enim possimus tenetur libero! Dolore natus consequuntur qui pariatur labore quos, tempore quia quae! Doloribus iste alias, nobis reprehenderit cum aperiam maiores, est officia eos placeat debitis expedita quidem dicta neque necessitatibus corrupti animi dolor quos ab tempora sequi dolores voluptate dignissimos. Delectus, quas non fugit id voluptates iste beatae tempore quisquam! Rerum ab nihil quo, minus saepe ea laboriosam vitae modi sequi, incidunt repellat! Maxime pariatur iste voluptatibus enim ea suscipit blanditiis tenetur, error voluptatem porro commodi illum iusto fugiat sequi modi, dolores deleniti corrupti. Veritatis quibusdam iste placeat magni, velit temporibus enim autem quis minima odio accusamus, natus, ipsum quod facere ratione sunt culpa incidunt explicabo expedita hic quo iusto. Corporis iure dolorem libero in sit ducimus dignissimos. Impedit culpa magnam aspernatur neque rem voluptatibus dolor laboriosam quia possimus ullam ut officia libero dolores quidem, excepturi perferendis! Nobis id est eligendi ratione sequi. Accusamus provident deleniti sint eaque vitae ut quidem sed sit, suscipit dignissimos deserunt repudiandae qui doloribus nobis obcaecati architecto rerum reprehenderit, numquam necessitatibus temporibus esse labore dolores! Possimus maiores voluptas non rem, pariatur deleniti ex repellendus. Possimus vitae dolores culpa cum, harum ullam unde vero odit eum numquam id, error aliquam at fugit officiis libero, nesciunt blanditiis? Ut sapiente veniam culpa odit accusantium iure dicta laudantium assumenda itaque debitis. Aperiam et provident consequuntur fugit quam.
        </div>
      </div>
    </>
  );
};

export default SideNav;
