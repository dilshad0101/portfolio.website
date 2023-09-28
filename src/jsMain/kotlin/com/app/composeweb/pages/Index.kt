package com.app.composeweb.pages

import androidx.compose.runtime.*
import com.app.composeweb.BlackColor
import com.app.composeweb.WhiteColor
import com.app.composeweb.YellowColor
import com.varabyte.kobweb.core.Page
import org.jetbrains.compose.web.css.JustifyContent
import com.app.composeweb.components.sections.footer
import com.app.composeweb.components.sections.navHeader
import com.app.composeweb.components.sections.project
import com.app.composeweb.components.sections.skillSet
import com.varabyte.kobweb.compose.css.*
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.navigation.Anchor
import com.varabyte.kobweb.silk.components.layout.Surface
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.w3c.fetch.RequestRedirect

@Page
@Composable
fun HomePage() {

    LaunchedEffect("Dilshad") {
        document.title = "Dilshad"
    }


    Box(
        Modifier
            .background(CSSBackground(color= BlackColor))
            .padding(0.px)
            .margin(0.px)
            .fillMaxSize()
            .gridTemplateRows("minmax(0, 1fr) min-content"),
    ) {
        val br = rememberBreakpoint()
        Column(
            modifier = Modifier.fillMaxSize()
                .color(WhiteColor).textAlign(TextAlign.Center),
            horizontalAlignment = Alignment.Start
        ) {
            navHeader()
            H1(attrs = Modifier
                .thenIf(br > Breakpoint.SM,//on Larger
                    Modifier.margin(80.px, left = 120.px, bottom = 100.px)
                )
                .thenIf(br <= Breakpoint.SM ,//on Mobile
                    Modifier
                        .fillMaxWidth()
                        .display(DisplayStyle.Flex)
                        .justifyContent(JustifyContent.Center)
                        .margin(top = 35.px)
                )
                .color(YellowColor)
                .toAttrs()) {

                Column {
                    Span(Modifier.color(YellowColor)
                        .thenIf(br > Breakpoint.SM,//on Larger
                            Modifier.fontSize(50.px)
                        )
                        .thenIf(br <= Breakpoint.SM ,//on Mobile
                            Modifier.fontSize(38.px)
                        )
                        .toAttrs()) {
                        Span(attrs = Modifier
                            .thenIf(br > Breakpoint.SM,//on Larger
                               Modifier.fontSize(50.px)
                            )
                            .thenIf(br <= Breakpoint.SM ,//on Mobile
                                Modifier.fontSize(38.px)
                            )
                            .lineHeight(0.px)
                            .paddingInline(0.px).margin(0.px)
                            .color(WhiteColor)
                            .toAttrs())
                        { Text("I'm ") }
                        Text("Dilshad") }
                    Span(attrs = Modifier.color(YellowColor)
                        .thenIf(br > Breakpoint.SM,//on Larger
                            Modifier.fontSize(50.px)
                        )
                        .thenIf(br <= Breakpoint.SM ,//on Mobile
                            Modifier.fontSize(38.px)
                        )
                        .padding(0.px).margin(0.px)

                        .toAttrs()) { Text("Muhammed")}

                    Span(attrs = Modifier
                        .color(WhiteColor)
                        .thenIf(br > Breakpoint.SM,//on Larger
                            Modifier.fontSize(18.px)
                        )
                        .thenIf(br <= Breakpoint.SM ,//on Mobile
                            Modifier.fontSize(14.px)
                        )
                        .fontWeight(FontWeight.Medium)
                        .toAttrs()) {
                        Text("Native Android Developer")
                    }

                    Anchor("https://mail.google.com/mail/?view=cm&to=dilshadmuhammed0101@gmail.com&su=&body="){
                        Button(
                            attrs = Modifier
                                .cursor(Cursor.Pointer)
                                .height(32.px)
                                .thenIf(br > Breakpoint.SM,//on Larger
                                    Modifier.margin(top = 10.px)
                                 )
                                .thenIf(br <= Breakpoint.SM ,//on Mobile
                                    Modifier.margin(top = 5.px)
                                )
                                .width(60.px)
                                .fontSize(FontSize.XXSmall)
                                .fontWeight(FontWeight.Bold)
                                .borderStyle(LineStyle.None)
                                .borderRadius(50.px,50.px)
                                .background(CSSBackground(color= YellowColor))
                                .toAttrs()
                        ){
                            Text("HIRE ME")
                        }
                    }

                }
            }
            Column(modifier = Modifier
                .display(DisplayStyle.Flex)
                .thenIf(br > Breakpoint.SM,//on Larger
                    Modifier.margin(top = 10.px)
                )
                .thenIf(br <= Breakpoint.SM ,//on Mobile
                    Modifier.margin(top = 40.px)
                        .margin(leftRight = 15.px)

                )
            ) {
                Column(modifier = Modifier
                    .thenIf(br > Breakpoint.SM,//on Larger
                        Modifier.margin(left = 45.px,right = 40.px)
                    )
                    .thenIf(br <= Breakpoint.SM ,//on Mobile
                        Modifier.margin(top = 60.px)
                    )
                    .id("about")) {
                    H1{
                        SpanText("About", modifier = Modifier.color(YellowColor))
                    }

                    P(
                        attrs = Modifier.textAlign(TextAlign.Start)
                            .thenIf(br > Breakpoint.SM,//on Larger
                                Modifier.margin(right = 40.px)
                            )
                            .thenIf(br <= Breakpoint.SM ,//on Mobile
                                Modifier.margin(0.px)
                            )
                            .toAttrs()
                    ){
                        Span(attrs = Modifier
                            .thenIf(br > Breakpoint.SM,//on Larger
                                Modifier.textAlign(TextAlign.Start)
                            )
                            .thenIf(br <= Breakpoint.SM ,//on Mobile
                                Modifier.textAlign(TextAlign.Start)
                                    .letterSpacing(0.25.px)

                            )
                            .toAttrs()){
                            Text("I am Dilshad Muhammed, a seasoned software developer specializing in Native Android Development. With a proven track record of excellence, I bring a wealth of expertise and experience to the table. As a dedicated freelancer, I have had the privilege of working on a diverse range of projects, allowing me to refine my skills and deliver exceptional results. My proficiency in Native Android Development empowers me to create bespoke applications that seamlessly blend cutting-edge technology with elegant design. I pride myself on developing robust and scalable solutions that not only meet but exceed client expectations. From ideation to execution, I am committed to delivering flawless, user-centric experiences that drive business growth. By staying at the forefront of industry advancements, I ensure that my applications are equipped with the latest features and functionalities. I relentlessly pursue professional development opportunities, continuously expanding my technical knowledge to remain ahead of the curve. This commitment to innovation enables me to deliver solutions that are not only visually appealing but also optimized for performance and efficiency.")

                        }
                    }

                }
            }

            Box(modifier = Modifier

                .thenIf(br > Breakpoint.SM,//on Larger
                    Modifier.margin(left = 45.px, top = 50.px,right = 50.px)
                )
                .thenIf(br <= Breakpoint.SM ,//on Mobile
                    Modifier.margin(leftRight = 15.px)
                )
                .id("skill")) {
                Column {
                    H1{
                        SpanText("My Skills", modifier = Modifier.color(YellowColor))
                    }

                    skillSet("Seamless Native App Development", "By utilizing Java or Kotlin for Android and Swift or Objective-C for iOS, I ensure that your app runs seamlessly on the respective platforms, delivering a native user experience that engages and delights your target audience.")
                    skillSet("Cross-Platform Proficiency","As a versatile developer, I possess expertise in cross-platform frameworks such as Kotlin Multiplatform, Compose Web. This allows me to leverage a single codebase to build apps that work flawlessly on multiple platforms, saving time and resources without compromising on quality or performance.")
                    skillSet("Striking UI/UX Design","By carefully crafting intuitive interfaces and aesthetically pleasing designs, I create apps that not only look stunning but also ensure smooth navigation and effortless interaction. By integrating cutting-edge design tools like Figma, I deliver visually impactful and user-friendly apps that leave a lasting impression.")
                    skillSet("Seamless API Integration","I can enhance your app's functionality by seamlessly integrating features like social media integration, payment gateways, geolocation services, and much more. By effectively utilizing APIs, I ensure your app remains connected to the latest technologies and services")
                    skillSet("Reliable Project Management","I understand the importance of clear communication, meeting deadlines, and ensuring client satisfaction. With a detail-oriented approach, I meticulously plan and execute each project, keeping you informed every step of the way.")

                }
            }

            Box(modifier = Modifier
                .thenIf(br > Breakpoint.SM,//on Larger
                    Modifier.margin(left = 45.px, top = 50.px,right = 50.px)
                )
                .thenIf(br <= Breakpoint.SM ,//on Mobile
                    Modifier.margin(leftRight = 15.px)
                )
            ) {
                Column {
                    H1(attrs = Modifier.id("project").toAttrs()){
                        SpanText("My Projects", modifier = Modifier.color(YellowColor))
                    }

                    Column(
                        modifier = Modifier
                    ){
                        project(
                            imgPath = "/musicplayer.jpg",
                            title = "Music Player: TuneCast",
                            Description = "Tunecast is a native Android music player app developed using Kotlin and Compose. It features lyrics display and utilizes Cloud Firestore for remote database access. The app follows MVVM architecture and adheres to Material3 UI patterns for a modern look and feel. Tunecast provides personalized music recommendations and allows users to select their music, after which the app recommends similar tracks. Dynamic colors are displayed using the Palette API, and audio playback is powered by the media3 library."
                        )
                        
                        project(
                            imgPath = "/spendrPoster.jpg",
                            title = "Wallet Tracker: Spendr",
                            Description = "Spendr, the ultimate wallet tracking app for effortless expense and savings management. Keep a close eye on your finances with Spendr's intuitive interface. Gain insights through interactive graphs that beautifully depict your spending habits. Personalized financial advice is just a tap away, helping you make informed decisions and reach your goals faster. Track your expenses, savings, and stay in control of your financial journey like never before. Spendr empowers you with actionable recommendations to optimize your budget and maximize savings. Simplify money management and achieve financial freedom with Spendr."
                        )

                        project(imgPath = "/img0.jpg", title =  "Quick Notes",Description ="with our aesthetically designed note app. Say goodbye to cluttered and uninspiring notes as our app provides a visually pleasing interface that sparks creativity and enhances focus. Capture your ideas, make to-do lists, and organize your thoughts effortlessly, all while enjoying the seamless and intuitive user experience. Simplify your life and elevate your productivity with our stunning note app.")

                        project(
                            imgPath = "/img1.jpg", title = "Prayer Time Reminder", Description =  "PrayerTime Reminder is a powerful and intuitive mobile app designed to help you stay connected to your faith through timely and accurate prayer times. With precise calculations based on your location, customizable Adhan notifications, and a built-in Qibla compass, you'll never miss a prayer again. Seamlessly adjust prayer times to match your local conventions and track your prayer history for personal reflection. Stay informed about Islamic events with the integrated calendar and explore Quranic resources for spiritual guidance. With a user-friendly interface and multilingual support, PrayerTime Reminder is your ultimate prayer companion, ensuring you never lose touch with your daily prayers. Download PrayerTime Reminder now and experience a more fulfilling and organized prayer journey.")



                    }

                }
            }
        }


        footer(Modifier.align(Alignment.Center).gridRowStart(2).gridRowEnd(3))
    }



}





